#!/usr/bin/env python
from bs4 import BeautifulSoup as bs
import requests
import functools
import re
import json
import argparse

DEBUG = False

def log(string):
    if (DEBUG):
        print (string)

''' 
Class that contains the parsing methods depending
on the site inside the top500 website
'''
class top500Parser:
    def __init__(self, base_url="https://www.top500.org/"):
        self.base_url = base_url

    
    ''' 
    Obtain a list of all systems
    '''
    def parseSystems(self, topNum=999999):
        all_the_systems = []
        for i in range(1,topNum):
            response = requests.get(self.base_url+'system/'+str(i))
            html_doc = response.text
            soup = bs(html_doc, 'html.parser')
            # Check if the system returned an invalid website
            if (str(soup.title).find("Page not found") is -1):
                system_params = {}
                # Getting system name (we know it is the first h1)
                system_name = soup.find("h1").text
                system_name = re.sub('\W+', ' ', system_name)
                system_name = re.sub(' +', ' ', system_name)
                system_params["name"] = system_name

                # Obtain the table for the system's parameters
                # There are two tables, the first one has the parameters
                # The second one has the lists in which this system has been
                tables = soup.find_all("table")
                if (len(tables) < 2):
                    "There is a system that has no two tables"
                    continue
                system_param_table = tables[0]
                for row in system_param_table("tr"):
                    header = row("th")[0].text
                    td_content = row("td")
                    value = ""
                    # Some headers are just placeholders for visualization (titles)
                    if (len(td_content) is not 0):
                        value = td_content[0].text
                        system_params[header] = value
                
                # Obtainint the tables for the system position in all 
                # the different lists
                system_positions = []
                if (tables[1]):
                    table_positions = tables[1]("tr")
                    # First row has the headers
                    headers = table_positions[0]("th")
                    # Using the headers we iterate the rest of the table
                    for row in table_positions[1:]:
                        new_entry = {}
                        for counter, cellVal in enumerate(row("td")):
                            header = headers[counter].text
                            new_entry[header] = cellVal.text
                        system_positions.append(new_entry)
                
                # Adding the positions and the id in the top500 list
                system_params["positions"] = system_positions
                system_params["id_top500"] = i

                # Append the new system to all the systems list
                all_the_systems.append(system_params)
            # end if
        # end for
        # Return 
        return all_the_systems


def main():

    ## Select the phase options
    parser = argparse.ArgumentParser(description='This script helps parsing the top 500 website and analysing')


    parser.add_argument("-debug","-d", action="store_true", help="Add debugging messages")

    group = parser.add_mutually_exclusive_group()
    group.add_argument('-parse-website', action='store_true', help='Enable website parsing')
    group.add_argument('-load-file', help='Enable loading from file')
    
    args = parser.parse_args()

    #Create a parser 
    systems = []

    if (args.debug):
        global DEBUG
        DEBUG = True
    log(f"The arguments that were sent are: {args}")

    #use the parser
    if (args.parse_website):
        print("This will take some time ...")
        parser = top500Parser()
        systems = parser.parseSystems()
        try:
            with open("out.json","w") as json_file:
                json.dump(systems, json_file)
        except:
            print("I could not save the file for some reason")

    if (args.load_file):
        try:
            log(f"Opening file {args.load_file}")
            with open(args.load_file,"r") as json_file:
                systems = json.load(json_file)
                log("Systems loaded")

        except:
            print(f"The file {args.load_file} does not exist or cannot be open") 


if __name__ == "__main__":
    main()
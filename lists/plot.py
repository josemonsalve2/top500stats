#!/usr/bin/env python

import numpy as np
from scipy import stats
import matplotlib.pyplot as plt
import matplotlib.ticker as plt_tick
import matplotlib.cm as plt_cmx
import matplotlib.colors as plt_colors
import csv
import sys, os
from datetime import date
from dateutil import parser as date_parser
from collections import OrderedDict
import re

class top500_entry:
    list_date = date.today()
    rank = -1
    systemName = ""
    def __init__(self, list_date, rank, systemName):
        self.list_date = date_parser.parse(list_date)
        self.rank = rank
        self.systemName = systemName
    def __lt__(self, other):
        if (self.list_date == other.list_date):
            return self.rank < other.rank
        else:
            return self.list_date < other.list_date
    def __gt__(self, other):
        if (self.list_date == other.list_date):
            return self.rank > other.rank
        else:
            return self.list_date > other.list_date
    def __str__(self):
        return str(self.list_date) + '\t' + str(self.rank) + '\t' + self.systemName

if (len(sys.argv) < 2):
    print("specify a CSV file")
    exit()
    
for filename in sys.argv[1:]:
    ''' Databases:
        whole_list will contain the list as loaded from the file [date, rank, name]
        sorted_list will be sorted by date then rank
        number1Data is a dictionary where the key is the cleaned system name and the 
                    value is an array of all the entries in the top 500 listS for that system
        allPositionsData is an array of dictionary where each index representes the initial
                         position of the system (the first time it landed in top500) for a total of 500 
                         indexes. And the value of the array is a dictionary where the key is the cleaned 
                         system name and the value is an array of all the entries on all the top500 lists
    ''' 
    
    whole_list = []
    with open(filename) as csv_file: 
        newEntry = None
        csv_reader = csv.reader(csv_file, delimiter=",")
        for row_entry in csv_reader:
            newEntry = top500_entry(row_entry[0], int(row_entry[1]), row_entry[2])
            whole_list.append(newEntry)
        
    print(len(whole_list))
    sorted_list = sorted(whole_list)
    number1Data = OrderedDict()

    for listEntry in sorted_list: 
        # each number 1 we gotta input it in the plot
        systemName = re.sub('\W+',' ',listEntry.systemName)
        systemName = re.sub(' +', ' ', systemName)
        if listEntry.rank == 1: 
            if systemName not in number1Data:
                number1Data[systemName] = []
            number1Data[systemName].append(listEntry)
        elif systemName in number1Data:
            number1Data[systemName].append(listEntry)

    # Plotting the position over time of #1 supercomputers
    fig = plt.figure()
    ax = fig.add_subplot(1,1,1)
    for systemName in number1Data:
        x_data = []
        y_data = []
        for dateEntry in number1Data[systemName]:
            x_data.append(dateEntry.list_date)
            y_data.append(dateEntry.rank)
        ax.plot(x_data, y_data, lw=3, c=np.random.rand(3,1), marker="o")
        
    ax.set_title("Position history of Top1 systems in the top500 lists")
    ax.set_xlabel("year")
    ax.set_xlim([date(1993, 1, 1), date(2019, 1, 1)])
    ax.set_ylim([0.8, 400])

    ax.set_ylabel("Rank of system")
    plt.yscale('symlog', subsy=[2, 3, 4, 5, 6, 7, 8, 9])
    plt.grid(True)
    plt.grid(b=True, which='major',axis='y', color="#AAAAAA", linestyle='-', lw= 1)
    plt.grid(b=True, which='minor', color="b", linestyle='--')
    plt.gca().invert_yaxis()
    plt.gca().yaxis.set_major_formatter(plt_tick.ScalarFormatter())
    plt.show()

    # Plotting the position over time of all supercomputers

    allPositionsData = [OrderedDict() for i in range(500)]

    for listEntry in sorted_list: 
        # each number 1 we gotta input it in the plot
        systemName = re.sub('\W+',' ',listEntry.systemName)
        systemName = re.sub(' +', ' ', systemName)

        systemRank = listEntry.rank
        initialRank = None
        #Iterate all the positions looking for it in the past
        for i, initPositionData in enumerate(allPositionsData):
            if systemName in initPositionData:
                initialRank = i
                break
        #system is new?
        if (not initialRank):
            initialRank = systemRank - 1
            allPositionsData[initialRank].update({systemName: []})

        #add the entry
        allPositionsData[initialRank][systemName].append(listEntry)
    
    fig = plt.figure()
    ax = fig.add_subplot(1,1,1)
    #color 
    cm = plt.get_cmap('brg') 
    cNorm  = plt_colors.Normalize(vmin=0, vmax=500)
    scalarMap = plt_cmx.ScalarMappable(norm=cNorm, cmap=cm)

    for initialRank, initPositionData in enumerate(reversed(allPositionsData)):
        color = scalarMap.to_rgba(500-initialRank)
        for systemName in initPositionData:
            x_data = []
            y_data = []
            for dateEntry in initPositionData[systemName]:
                x_data.append(dateEntry.list_date)
                y_data.append(dateEntry.rank)
            ax.plot(x_data, y_data, lw=0.15, color = color)
            
        
    ax.set_title("Position history of all systems in the top500 lists")
    ax.set_xlabel("year")
    ax.set_xlim([date(1993, 1, 1), date(2019, 1, 1)])
    ax.set_ylim([-1, 500])

    ax.set_ylabel("Rank of system")
    plt.gca().invert_yaxis()
    plt.show()

    # Plotting the number of years in the #1 position, and at the top500.

    systems = np.arange(len(number1Data))
    yearsAs1 = []
    yearsInTop500 = []
    firstTimeAs1 = []
    yearFirstTime = []
    systemNames = []
    width = 0.65

    for systemName in number1Data:
        sortedPositions = sorted(number1Data[systemName])
        numTimesAs1 = 0
        numTimesInList = 0
        shortName = systemName[:20] if len(systemName) > 13 else systemName
        for entry in sortedPositions:
            if entry.rank == 1:
                numTimesAs1 += 1
                
            numTimesInList += 1
        yearFirstTime.append(sortedPositions[0].list_date.strftime("%m/ %y"))
        #fill in the data
        # Since there are two lists per year we divide by 2
        systemNames.append(shortName)
        yearsAs1.append(numTimesAs1*.5)
        yearsInTop500.append(numTimesInList*.5)
    
    
    p2 = plt.bar(systems, yearsInTop500, width, align='center')
    p1 = plt.bar(systems, yearsAs1, width, color='r', align='center')

    max_num_years = max(yearsInTop500)
    
    #Titles and stuff
    plt.xlabel("System")
    plt.ylabel("Number of years")
    plt.title("Duration in the top500 of #1 systems")

    #Enable grid
    plt.grid(b=True, axis='y')

    # Tick labels
    plt.xticks(systems+(width/2), systemNames, rotation=45, ha='right')
    plt.gcf().subplots_adjust(bottom=0.30)

    # Adding legend
    plt.legend((p1[0], p2[0]), ('As #1 of the list', 'As part of the list'))
    
    #fixing limits
    plt.ylim(0, max_num_years + 5)
    plt.xlim(-1, max(systems) + 1)

    #adding anotations
    for i, txt in enumerate(yearFirstTime):
        plt.annotate(txt, (systems[i]-width/2, yearsInTop500[i]+2.5), rotation='90')
    plt.show()

    for listEntry in sorted_list: 
        # each number 1 we gotta input it in the plot
        systemName = re.sub('\W+',' ',listEntry.systemName)
        systemName = re.sub(' +', ' ', systemName)
        if listEntry.rank == 1: 
            if systemName not in number1Data:
                number1Data[systemName] = []
            number1Data[systemName].append(listEntry)
        elif systemName in number1Data:
            number1Data[systemName].append(listEntry)

    # plotting the average time on list per initial position
    
    # Obtain the number of years per system
    positions = range(1,501)
    yearsPerInitialPos = [[] for i in range(500)]
    for pos, positionData in enumerate(allPositionsData): 
        for systemName in positionData:
            # Get the number of lists this system appears
            numberOfLists = len(positionData[systemName])
            # there are two lists per year
            yearsPerInitialPos[pos].append(numberOfLists * 0.5)
    
    averagesPerPos = [np.mean(yearsPerInitialPos[i]) for i in range(500)]
    stdErrPerPos = [stats.sem(yearsPerInitialPos[i]) for i in range(500)]
    errUp = [averagesPerPos[i] + stdErrPerPos[i] for i in range(500)]
    errDown = [averagesPerPos[i] - stdErrPerPos[i] for i in range(500)]

    z = np.polyfit(positions, averagesPerPos, 1)
    p = np.poly1d(z)

    fig = plt.figure()
    ax = fig.add_subplot(1,1,1)
    
    line, = ax.plot(positions, averagesPerPos, lw=0.5)
    #errorArea = ax.fill_between(positions, errUp, errDown, color="#bfd7fc")
    trendLine = plt.plot(positions,p(positions),"r--", lw=1.3)
    ax.legend(["Average num of years","Trend Line"])

    #errorArea.set_label(["SEM"])
    #trendLine.set_label(["Trend Line"])

    ax.set_title("Average number of years on the Top500 list per initial position")
    ax.set_ylabel("Average of years")
    ax.set_xlabel("Position in which it first appear in a Top500 list")

    plt.grid(b=True, which='major',axis='y', color="#AAAAAA", linestyle='--', lw= 0.2)
    #plt.grid(b=True, which='minor', color="b", linestyle='--')
    #plt.gca().yaxis.set_major_formatter(plt_tick.ScalarFormatter())
    plt.show()

        
        
        


        # newVals = []
        # csv_reader = csv.reader(csv_file, delimiter=",")
        # line_count = 0
        # for row in csv_reader:
        #     if line_count != 0:
        #         newVals.append(float(row[1]))
        #     line_count += 1
        # if (len(newVals)>0):
        #     values.append(newVals)

        #     maxVal = max(newVals)
        #     minVal = min(newVals)
        #     avgVal = np.mean(newVals)
        #     print("stats[%s] = %d max = %f min = %f avg = %f" %(filename, len(newVals), maxVal, minVal, avgVal))
        #     ListNumber = int(os.path.splitext(filename)[0])
        #     averages[ListNumber] = avgVal
        #     maxValues[ListNumber] = maxVal

# print(averages)
# #fig1, ax1 = plt.subplots()
# #ax1.set_title('Basic Plot')
# #ax1.boxplot(values)
# plt.plot(list(maxValues.keys()),maxValues.values(), averages.keys(), averages.values())
# plt.show()

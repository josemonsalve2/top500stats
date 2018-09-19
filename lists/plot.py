#!/usr/bin/env python

import numpy as np
import matplotlib.pyplot as plt
import matplotlib.ticker as plt_tick
import csv
import sys, os
from datetime import date
from dateutil import parser as date_parser

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
    whole_list = []
    with open(filename) as csv_file: 
        newEntry = None
        csv_reader = csv.reader(csv_file, delimiter=",")
        for row_entry in csv_reader:
            newEntry = top500_entry(row_entry[0], int(row_entry[1]), row_entry[2])
            whole_list.append(newEntry)
        
    print(len(whole_list))
    sorted_list = sorted(whole_list)
    number1Data = {}

    for listEntry in sorted_list: 
        # each number 1 we gotta input it in the plot
        if listEntry.rank == 1: 
            if listEntry.systemName not in number1Data:
                number1Data[listEntry.systemName] = []
            number1Data[listEntry.systemName].append(listEntry)
        elif listEntry.systemName in number1Data:
            number1Data[listEntry.systemName].append(listEntry)

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

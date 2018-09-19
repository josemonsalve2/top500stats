#!/usr/bin/env python

import numpy as np
import matplotlib.pyplot as plt
import csv
import sys, os

if (len(sys.argv) < 2):
    print("specify a CSV file")
    exit()
    
values = []
averages = {}
maxValues = {}
for filename in sys.argv[1:]:
    with open(filename) as csv_file: 
        newVals = []
        csv_reader = csv.reader(csv_file, delimiter=",")
        line_count = 0
        for row in csv_reader:
            if line_count != 0:
                newVals.append(float(row[1]))
            line_count += 1
        if (len(newVals)>0):
            values.append(newVals)

            maxVal = max(newVals)
            minVal = min(newVals)
            avgVal = np.mean(newVals)
            print("stats[%s] = %d max = %f min = %f avg = %f" %(filename, len(newVals), maxVal, minVal, avgVal))
            ListNumber = int(os.path.splitext(filename)[0])
            averages[ListNumber] = avgVal
            maxValues[ListNumber] = maxVal

print(averages)
#fig1, ax1 = plt.subplots()
#ax1.set_title('Basic Plot')
#ax1.boxplot(values)
plt.plot(list(maxValues.keys()),maxValues.values(), averages.keys(), averages.values())
plt.show()
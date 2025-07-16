"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

class Solution:
    def canAttendMeetings(self, intervals: List[Interval]) -> bool:
        sorted_intervals = sorted(intervals, key=lambda interval: interval.start)

        for i in range(1, len(intervals)):
            pre = sorted_intervals[i - 1]
            aft = sorted_intervals[i]

            if(aft.start < pre.end):
                return False
        
        return True


class Data:
    def __init__(self, value, count):
        self.value = value
        self.count = count

    def calculate_average(self):
        return self.value / self.count


def average_calculator():
    results = {}

    for d in data:
        result = results[d.date]
        result.value = result.value + d.reading
        result.count = resut.count + 1

    for d in results.keys:
        results[d] = results[d].calculate_average()

    return results
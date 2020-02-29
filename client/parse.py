import json


with open("./src/data/courses.json") as file:
    courses = json.load(file)

names = set()
parsed_courses = []

for course in courses:
    course_name = course["Subject"] + " " + str(course["Number"])

    if course_name not in names:
        names.add(course_name)
        course_dict = {
            "title": course_name,
            "description": course["Description"],
            "name": course["Name"],
        }
        parsed_courses.append(course_dict)

print(parsed_courses)

with open("courses.json", "w") as json_file:
    json.dump(parsed_courses, json_file)

import json

with open("../client/src/data/courses-full.json") as course_file:
    courses = json.load(course_file)
    data = []
    all_courses = set()
    for course in courses:
        course_title = course["Subject"] + " " + str(course["Number"])
        if course_title in all_courses:
            for c in data:
                if c["title"] == course_title:
                    for instructor in course["Instructors"].split(";"):
                        if instructor not in c["instructors"]:
                            c["instructors"].append(instructor)
        else:
            all_courses.add(course_title)
            data.append(
                {
                    "title": course_title,
                    "name": course["Name"],
                    "description": course["Description"],
                    "instructors": course["Instructors"].split(";"),
                }
            )

with open("../client/src/data/courses.json", "w", encoding="utf-8") as new_course_file:
    json.dump(data, new_course_file, ensure_ascii=False, indent=4)

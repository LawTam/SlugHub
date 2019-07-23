from requests import get
from requests.exceptions import RequestException
from contextlib import closing
from bs4 import BeautifulSoup
import json


def simple_get(url):
    """
    Attempts to get the content at `url` by making an HTTP GET request.
    If the content-type of response is some kind of HTML/XML, return the
    text content, otherwise return None.
    """
    try:
        with closing(get(url, stream=True)) as resp:
            if is_good_response(resp):
                return resp.content
            else:
                return None

    except RequestException as e:
        log_error('Error during requests to {0} : {1}'.format(url, str(e)))
        return None


def is_good_response(resp):
    """
    Returns True if the response seems to be HTML, False otherwise.
    """
    content_type = resp.headers['Content-Type'].lower()
    return (resp.status_code == 200
            and content_type is not None
            and content_type.find('html') > -1)


def log_error(e):
    """
    It is always a good idea to log errors. 
    This function just prints them, but you can
    make it do anything.
    """
    print(e)


def generate_classes_dict(dept, division):

    alphabet = [':', 'a', 'b', 'c', 'd', 'e', 'f', 'g'
                                    'h', 'i', 'j', 'k', 'l', 'm', 'n'
                                    'o', 'p', 'q', 'r', 's', 't', 'u'
                                    'v', 'w', 'x', 'y', 'z']

    if division == 0:  # Lower Div Courses
        div = "lowerdiv"
        class_range_start = 0
        class_range_end = 100
    elif division == 1:  # Upper Div Courses
        div = "upperdiv"
        class_range_start = 101
        class_range_end = 300

    base_file = str(div) + "_" + str(dept) + "_" + "classes.json"
    # Generates the required file with the appropriate name
    file = open(base_file, "w+")
    class_dict = {}
    ################
    # General structure of code:
    # 1. Iterate through all permutations of the numbers in range.
    # (ex. for 0-100, we would go from 0A -> 0B ... 0Z -> 1A ... 99Z)
    # 2. For every permutation, we generate a link, and if that link
    # contains a valid course, we add it to our dictionary
    # 3. A course is considered valid if it has a title, which we 
    # can confirm using BeautifulSoup webscraping.
    ################
    for num in range(class_range_start, class_range_end):
        for letter in alphabet:
            base_url = 'https://courses.soe.ucsc.edu/courses/'
            base_url += str(dept)+str(num)+str(letter)+'.html'

            raw_link = simple_get(base_url)
            html = BeautifulSoup(raw_link, 'html.parser')
            for title in html.select('title'):
                new_class = title.text
                split_string = new_class.split("|")
                class_name = split_string[0]
                if class_name != 'Course ':
                    full_name = class_name
                    split_class = class_name.split(":")
                    class_prefix = split_class[0]
                    class_dict.update({class_prefix: full_name})
    file.write(json.dumps(class_dict, indent=4))
    file.close()


if __name__ == "__main__":
    # Currently only contains JBE course prefixes
    depts = ['am','bme','cmpm','cse','ece','game','stat']
    #depts = ['cse']

    for dept in depts:
        generate_classes_dict(dept, 0)  # Lower Div Courses
        generate_classes_dict(dept, 1)  # Upper Div Courses

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

if __name__ == "__main__":
	alphabet = [':','a','b','c','d','e','f','g'
					'h','i','j','k','l','m','n'
					'o','p','q','r','s','t','u'
					'v','w','x','y','z']

	depts = ['am','bme','cmpm','cse','ece','game','tim','stat']
	#depts = ['cse']

	class_dict = {}
	file = open("classes.json","w+")
	for dept in depts:
		for num in range(0,6):
			for letter in alphabet:
				base_url = 'https://courses.soe.ucsc.edu/courses/'
				base_url += str(dept)+str(num)+str(letter)+'.html'
				#print(base_url)
				
				raw_link = simple_get(base_url)
				html = BeautifulSoup(raw_link, 'html.parser')
				for title in html.select('title'):
					new_class = title.text
					split_string = new_class.split("|")
					class_name = split_string[0]
					#print(class_name)
					if class_name != 'Course ':
						full_name = class_name
						split_class = class_name.split(":")
						class_prefix = split_class[0]
						class_dict.update( {class_prefix : full_name} )
						#print(full_name)

	file.write(json.dumps(class_dict, indent=4))
	file.close()

		
	


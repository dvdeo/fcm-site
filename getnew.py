import requests
import os
import codecs
from bs4 import BeautifulSoup


def export_to_file(data):
    file_path = os.path.abspath("db/page.html")
    f_write = codecs.open(file_path, "w", "utf-8")
    for line in data:
        if line:
            f_write.write(line)


page = requests.get('https://news.zing.vn/')
# export_to_file(req.text)
soup = BeautifulSoup(page.text, 'html.parser')
print(soup.get_text())

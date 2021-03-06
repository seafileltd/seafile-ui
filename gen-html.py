# coding=utf-8

import os
import sys
import codecs

from jinja2 import Environment, PackageLoader, select_autoescape


path = os.path.dirname(os.path.abspath(__file__))
sys.path.append(path + "/" + "src")

env = Environment(
    loader=PackageLoader('seafile-ui', 'templates'),
    autoescape=select_autoescape(['html', 'xml'])
)

def write_template(filename):
    tmpl = env.get_template(filename)
    result = tmpl.render()
    outfile = codecs.open("dist/" + filename, 'w', encoding='utf-8')
    outfile.write(result)
    outfile.close()


if __name__ == "__main__":
    write_template("index.html")
    write_template("button.html")
    write_template("form.html")
    write_template("wikis.html")
    write_template("article.html")
    write_template("loading.html")
    os.system("cp -r src/assets/webfonts dist")
    os.system("cp -r src/assets/css dist")

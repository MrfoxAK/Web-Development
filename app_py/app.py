from flask import Flask, render_template


app = Flask(__name__)

@app.route('/')
def homepage():
     return render_template("new.html", title = "ak")

if __name__ == "__main__":
     app.run()














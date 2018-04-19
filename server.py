import json
from flask import jsonify,Flask,make_response,request,abort,render_template,session,url_for,escape,redirect
#from flask.ext.session import Session
import requests
#from flask_login import login_required, current_user
flag = 0

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():
    return render_template('Login.html')

@app.route('/prn')
def prn():
    fac_flag=0
    if fac_flag==1:        
        prn = request.args.get('a1', 0, type=int)
        user = {'username': prn}
        session['user'] = user
        return prn
    else:
        abort(403)
        

@app.route('/_add_numbers')
def take():
    prn = request.args.get('a1', 0, type=int)
    user = {'username': prn}
    session['user'] = user
    return jsonify(prn=prn)

@app.route('/test')
def hom():
    #return render_template('Login.html')
    return render_template('test2.html')

@app.route("/faculty")
def faculty():
    username = request.args.get('username', None)
    if username!=None:
        fac_flag=1
    else:
        fac_flag=0
        abort(403)    
    if fac_flag==1:
        print (username)
        session['username'] = username
        return render_template('faculty.html')

    
#  abort(403)

@app.route("/faculty_ques")
def faculty_ques():
    return render_template('faculty_ques.html')

@app.route("/result")
def result():
    return render_template('result.html')
def req_data():
    return jsonify(prn,allq,ans,n1,n2,n3,n4,n5,ques,ques2,ques3,ques4,ques5)

@app.route("/student" )
#@login_required
def student():
    prn = request.args.get('prn', None)
    
    if prn!=None:
        Username=session.get('username')
        session['prn'] = prn
        return render_template('student_quest.html',user=Username)
    else:
        abort(403)



if __name__ == "__main__":
    app.secret_key = 'super secret key'
    app.config['SESSION_TYPE'] = 'filesystem'

    #sess.init_app(app)
    app.run(debug=True, port=4043)
#@app.route("/student/result")
#def student():
 #   return render_template('student_result.html')


# Uncomment to add a new URL at /new

# @app.route("/json")
# def json_message():
#     return jsonify(message="Hello World")

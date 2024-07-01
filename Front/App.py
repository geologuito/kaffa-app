from flask import Flask
from flask import render_template

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/add_cafe')
def add_cafe():
    return "Esto deberia agregar una cafeteria"

@app.route('/edit_cafe')
def edit_cafe():
    return "Esto deberia editar una cafeteria"

@app.route('/delete_cafe')
def delete_cafe():
    return "Esto deberia eliminar una cafeteria"



if __name__ == '__main__':
    app.run(port = 5000,debug=True)
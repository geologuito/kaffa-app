from flask import Flask, flash, redirect, request, url_for
from flask import render_template
from flask_mysqldb import MySQL

app = Flask(__name__)

import mysql.connector
import mysql
#Coneccion a la base de datos

app.config['MYSQL_HOST'] = '127.0.0.1'
app.config['MYSQL_USER'] = 'Admin'
app.config['MYSQL_PASSWORD'] = 'Admin'
app.config['MYSQL_DB'] = 'kaffa_db'
mysql = MySQL(app)

#Settings

app.secret_key = 'mysecretkey'

# Verificar conexión a la base de datos
@app.route('/test_db')
def test_db():
    try:
        cur = mysql.connection.cursor()
        cur.execute('SELECT 1')
        cur.close()
        return 'Conexión a la base de datos exitosa'
    except Exception as e:
        return str(e)

#Renderizado de paginas
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/Form')
def formSuscripcion():
    return render_template('FormSuscripcion.html')

@app.route('/Eula')
def EULA():
    return render_template('terminos y condiciones.html')

@app.route('/Resena')
def formResena():
    return render_template('FormResena.html')

@app.route('/EncuentraKaffa')
def findKaffa():
    return render_template('EncuentraKaffa.html')

@app.route('/Admin')
def Admin():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM Cafeterias')
    data = cur.fetchall()
    return render_template('Admin.html', cafeterias = data)



#Endpoints

@app.route('/add_cafe', methods=['POST'])
def add_cafe():
    if request.method == 'POST':
        nombre = request.form['nombre']
        direccion = request.form['direccion']
        localidad = request.form['localidad']
        puntuacion = request.form['puntuacion']
        detalles = request.form['detalles']
        cur = mysql.connection.cursor()
        cur.execute('INSERT INTO Cafeterias  (nombre, direccion, localidad, puntuacion, detalles) VALUES (%s, %s, %s, %s, %s)', 
        (nombre, direccion, localidad, puntuacion, detalles))
        mysql.connection.commit()
        flash('Cafeteria agregada correctamente')
        return redirect(url_for('Admin'))


@app.route('/edit/<id>')
def get_cafe(id):
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM Cafeterias WHERE id = %s',(id))
    data = cur.fetchall()
    return render_template('edit-cafe.html', cafeteria = data[0])

@app.route('/update/<id>', methods = ['POST'])
def update_contact(id):
    if request.method == 'POST':
        nombre = request.form['nombre']
        direccion = request.form['direccion']
        localidad = request.form['localidad']
        puntuacion = request.form['puntuacion']
        detalles = request.form['detalles']
        cur = mysql.connection.cursor()
        cur.execute("""
                    UPDATE Cafeterias
                    SET nombre =  %s,
                        direccion =  %s,
                        localidad =  %s,
                        puntuacion =  %s,
                        detalles =  %s
                    WHERE id = %s
                    """, (nombre, direccion, localidad, puntuacion, detalles, id))
        mysql.connection.commit()
        flash('Cafeteria acualizada')
        return redirect(url_for('Admin'))



@app.route('/delete/<string:id>')
def delete_cafe(id):
    cur = mysql.connection.cursor()
    cur.execute('DELETE FROM Cafeterias WHERE id = {0}'.format(id))
    mysql.connection.commit()
    flash('Cafeteria eliminada correctamente')
    return redirect(url_for('Admin'))


# @app.route('/EncuentraKaffa/<string:nombre>')
# def encuentraKaffa(nombre):
#     cur = mysql.connection.cursor()
#     cur.execute('SELECT * FROM Cafeterias WHERE nombre = %s',(nombre))
#     data = cur.fetchall()
#     return render_template('EncuentraKaffa.html')


if __name__ == '__main__':
    app.run(port = 3000,debug=True)
from flask import Flask, render_template, request, redirectimport sqlite3

app = Flask(__name__)

# ساخت دیتابیس و جدول اگر وجود نداشت
conn = sqlite3.connect('comments.db')
c = conn.cursor()
c.execute('''CREATE TABLE IF NOT EXISTS comments
             (id INTEGER PRIMARY KEY, name TEXT, phone TEXT, message TEXT)''')
conn.commit()
conn.close()

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        name = request.form['name']
        phone = request.form['phone']
        message = request.form['message']

        conn = sqlite3.connect('comments.db')
        c = conn.cursor()
        c.execute("INSERT INTO comments (name, phone, message) VALUES (?, ?, ?)", 
                  (name, phone, message))
        conn.commit()
        conn.close()
        return redirect('/')  # بعد از ارسال فرم، صفحه دوباره لود میشه

    return render_template('index.html')
if __name__ == '__main__':
    app.run(debug=True)
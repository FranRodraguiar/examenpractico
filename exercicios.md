# Exercicios
## Base de datos libros

> Crea unha función en JS para insertar a través desa función a seguinte bbdd:

use libros

libros>load('funciones.js')

```js

        db.libros.insertOne(
          {
            _id: 1,  
            titulo: 'El aleph',
            autor: 'Borges',
            editorial: ['Siglo XXI','Planeta'],
            precio: 20,
            cantidade: 50 
          }
        )
        db.libros.insertOne(
          {
            _id: 2,  
            titulo: 'Martin Fierro',
            autor: 'Jose Hernandez',
            editorial: ['Siglo XXI'],
            precio: 50,
            cantidade: 12
          }
        )
        db.libros.insertOne(
          {
            _id: 3,  
            titulo: 'Aprenda PHP',
            autor: 'Mario Molina',
            editorial: ['Siglo XXI','Planeta'],
            precio: 50,
            cantidade: 20
          }
        )
        db.libros.insertOne(
          {
            _id: 4,  
            titulo: 'Java en 10 minutos',
            editorial: ['Siglo XXI'],
            precio: 45,
            cantidade: 1 
          }
        )
}


```
- Insertar 2 documentos na colección libros

libros> db.libros.insertMany([{"_id":5,"titulo":"Cantares Gallegos","editorial":['siglo XXI'],"precio":20,"cantidade":10},{"_id":6,"titulo":"La Colmena","editorial":['siglo XXI'],"precio":20,"cantidade":10}])

{ acknowledged: true, insertedIds: { '0': 5, '1': 6 } }

- Intentar insertar un documento con clave repetida (qué di a consola?, o permite?)

non deixa:
MongoServerError: E11000 duplicate key error collection: libros.libros index: _id_ dup key: { _id: 1 }

- Mostrar todos os documentos

libros>db.libros.find()

- Agrega unha colección chamada "posts" e inserta 1 documento cunha estructura calquera

libros>db.createCollection("posts")

- Cantas coleccións podes visualizar agora mesmo

libros> show collections
libros
posts

- Elimina a coleción chamada "posts"

libros> db.posts.drop()
true
libros> show collections
libros

- Crea outra bbdd chamada borrar, introdúcelle un dato calquera

libros> use borrar
switched to db borrar

borrar> db.proba.insertOne("Hola mundo")
{
  acknowledged: true,
  insertedId: ObjectId('65aa93a09159d3b828bf1a35')
}

borrar> db.proba.find()
[  
  {
    '0': 'H',
    '1': 'o',
    '2': 'l',
    '3': 'a',
    '4': ' ',
    '5': 'm',
    '6': 'u',
    '7': 'n',
    '8': 'd',
    '9': 'o',
    _id: ObjectId('65aa93a09159d3b828bf1a35')
  }
]

- Borra a base de datos creada no punto anterior.

borrar> db.dropDatabase()
{ ok: 1, dropped: 'borrar' }
borrar> show dbs
admin          40.00 KiB
config        108.00 KiB
libros         72.00 KiB
local          40.00 KiB
medicamentos   72.00 KiB
proba0         40.00 KiB
proba2         72.00 KiB
borrar>

## Base de datos artigos
- Crea a seguinte bbdd, elixe un nome apropiado:

use artigos

artigos>load('funciones1.js)

```js

db.articulos.insertOne(
  {
    _id: 1,  
    nome: 'MULTIFUNCION HP DESKJET 2675',
    rubro: 'impresora',
    precio: 3000,
    stock: 20 
  }
)
db.articulos.insertOne(
  {
    _id: 2,  
    nome: 'MULTIFUNCION EPSON EXPRESSION XP241',
    rubro: 'impresora',
    precio: 3700,
    stock: 5 
  }
)
db.articulos.insertOne(
  {
    _id: 3,  
    nome: 'LED 19 PHILIPS',
    rubro: 'monitor',
    precio: 4500,
    stock: 2
  }
)
db.articulos.insertOne(
  {
    _id: 4,  
    nome: 'LED 22 PHILIPS',
    rubro: 'monitor',
    precio: 5700,
    stock: 4
  }
)
db.articulos.insertOne(
  {
    _id: 5,  
    nome: 'LED 27 PHILIPS',
    rubro: 'monitor',
    precio: 12000,
    stock: 1
  }
)

db.articulos.insertOne(
  {
    _id: 6,  
    nome: 'LOGITECH M90',
    rubro: 'mouse',
    precio: 300,
    stock: 4
  }
)


```
### Utilización de comparadores
- Imprime todos os datos da bbdd creada

artigos>db.articulos.find()

- Imprimir todos os artigos que pertencen ou rubro de 'mouse'.

artigos>db.articulos.find({rubro:{$in:['mouse']}})

- Imprimir todos os artigos cun precio maior o igual a 5000.

artigos>db.articulos.find({precio:{$gte:5000}})

- Imprimir todas as impresoras que teñen un precio maior ou igual a 3500.

artigos>db.articulos.find({$and:[{rubro:{$in:['impresora']}},{precio:{$gte:3500}}]})

- Imprimir todos os artigos cuxo stock atópase comprendido entre 0 y 4.

artigos>db.articulos.find({$and:[{stock:{$gte:0}},{stock:{$lte:4}}]})

- Imprimir todos os documentos da colección 'artigos' que non son impresoras.

artigos>db.articulos.find({rubro:{$nin:['impresora']}})

### Borrado de datos
> Lembra que as funcións son <span style="color:yellow;">deleteOne</span> e <span style="color:yellow;">deleteMany</span>

- Borra os documentos da colección 'artigos' onde 'rubro' son 'impresoras'

artigos>db.articulos.deleteMany({rubro:{$in:['impresora']}})

- Borra todos os artigos que teñen un '_id' maior ou igual a 5.

artigos>db.articulos.deleteMany({_id:{$gte:5}})

### Modificación 
> Lembra que as funcións son <span style="color:yellow;">updateOne</span> e <span style="color:yellow;">updateMany</span>

- Borra a base de datos creada de artigos.

artigos>db.dropDatabase()

- Volver crear a base de datos de artigos de novo

use artigos

artigos>load('funciones1.js')

- Modifica o prezo do mouse 'LOGITECH M90'

artigos>db.articulos.updateOne({nombre:{$in:['LOGITECH M90']}},[{$set:{'Precio':400}}])

- Fixa o stock en 0 do artigo onde o '_id' é 6.

artigos>db.articulos.updateOne({_id:{$in:[6]}},[{$set:{'stock':0}}])

- Fixa o stock de todos os artigos a 0.

artigos>db.articulos.updateMany({},[{$set:{'stock':0}}])

- Modifica o artigo con '_id' = 6, o cal deberá introducir unha nova propiedade: 'encargados', onde o valor introducido será o seguinte array:
['Juan','Francisco']

artigos>db.articulos.updateOne({_id:6},[{$set:{encargados:['Juan','Francisco']}}])


## Base de datos de medicamentos
> Lembra que utilizar un booleano ou un valor *1* ou *0*, realiza a tarefa de mostrar ou ocultar o valor buscado.

- Crea unha base de datos onde crear a seguinte colección:

use medicamentos

medicamentos>load('funciones2.js)

```js
db.medicamentos.insertOne(
  {
    _id: 1,  
    nome: 'Sertal',
    laboratorio: 'Roche',
    precio: 5.2,
    cantidade: 100  
  }
)
db.medicamentos.insertOne(
  {
    _id: 2,  
    nome: 'Buscapina',
    laboratorio: 'Roche',
    precio: 4.10,
    cantidade: 200 
  }
)
db.medicamentos.insertOne(
  {
    _id: 3,  
    nome: 'Amoxidal 500',
    laboratorio: 'Bayer',
    precio: 15.60,
    cantidade: 100 
  }
)
db.medicamentos.insertOne(
  {
    _id: 4,  
    nome: 'Paracetamol 500',
    laboratorio: 'Bago',
    precio: 1.90,
    cantidade: 200 
  }
)
db.medicamentos.insertOne(
  {
    _id: 5,  
    nome: 'Bayaspirina',
    laboratorio: 'Bayer',
    precio: 2.10,
    cantidade: 150 
  }
)
db.medicamentos.insertOne(
  {
    _id: 6,  
    nome: 'Amoxidal jarabe',
    laboratorio: 'Bayer',
    precio: 5.10,
    cantidade: 50 
  }
)

```
### Atopar con ... e uso de 

- Mostra todos os documentos onde só se visualicen o _id e o laboratorio

medicamentos> db.medicamentos.find({},{nome:0,precio:0,cantidade:0})

- Mostra os medicamentos onde laboratorio sexa 'Roche' e onde o precia sexa menor a 5.

medicamentos> db.medicamentos.find({$and:[{laboratorio:{$in:['Roche']}},{precio:{$lt:5}}]})

- Mostra os medicamentos onde laboratorio sexa 'Roche' ou onde o precio sexa maior a 5.

medicamentos> db.medicamentos.find({$or:[{laboratorio:{$in:['Roche']}},{precio:{$gt:5}}]})

- Mostra os medicamentos onde laboratorio non sexa 'Bayer'.

medicamentos> db.medicamentos.find({laboratorio:{$nin:['Bayer']}})

- Mostra os medicamentos onde laboratorio sexa 'Bayer' e onde cantidade non sexa 100.

medicamentos> db.medicamentos.find({$and:[{laboratorio:{$in:['Bayer']}},{cantidade:{$ne:100}}]})

- Mostra os laboratorios que sexan 'Bayer' e o precio menor que 6, pero só debes mostrar o nome e o laboratorio

medicamentos> db.medicamentos.find({$and:[{laboratorio:{$in:['Bayer']}},{precio:{$lt:6}}]},{_id:0,precio:0,cantidade:0})

### Eliminar

- Borra os documentos da colección onde laboratorio sexa "Bayer" ou onde precio sexa menor a 3.

medicamentos> db.medicamentos.deleteMany({"laboratorio":"Bayer","precio":{$lt:3}})

### Modificar

- Cambia a cantidade 200 a todos os medicamentos de 'Roche' onde o precio sexa maior a 5.

medicamentos> db.medicamentos.updateMany({$and:[{laboratorio:{$in:['Roche']}},{precio:{$gt:5}}]},[{$set:{cantidade:200}}])


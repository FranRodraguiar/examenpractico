function insertarDatos(){
    
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

insertarDatos()
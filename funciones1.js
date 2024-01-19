function insertarDatos(){

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
}    

insertarDatos()
export class libro{
    constructor(titulo, autor, pais, isbn){
        this.titulo = titulo;
        this.autor = autor;
        this.pais = pais;
        this.isbn = isbn;
    }

    toString() {
        return "Titulo: "+this.titulo+"\nAutor:"
        +this.autor+"\nPais:"
        +this.pais+"\nISBN:"
        +this.isbn;
    }

}

export class cliente{
    constructor(nombre="", direccion="", dni="", telefono=""){
        this.nombre= nombre;
        this.direccion = direccion;
        this.dni = dni;
        this.telefono = telefono;
    }

    toString() {
        return this.nombre+" "+this.direccion+" "+this.dni+" "+this.telefono;
    }

}

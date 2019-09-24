        export default class cliente{
            constructor(nombre="", direccion="", dni="", telefono=""){
                this.nombre= nombre;
                this.direccion = direccion;
                this.dni = dni;
                this.telefono = telefono;
            }

            toSting() {
                return this.nombre+" "+this.direccion+" "+this.dni+" "+this.telefono;
            }

        }


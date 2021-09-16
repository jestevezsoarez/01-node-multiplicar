## Aplicacion Generadora de Tablas de Multiplicar

Esta aplicación crea archivos txt con las tablas de multiplicar

Hay que ejecutar el comando luego de descargar la aplicación

```
npm install
```

Para imprimir en un archivo una tabla de cualquier número hacer:

```
node app guardarTabla --base 5 --limite 15
```

Donde base es el número al cual le quiero calcular la tabla
y limite es la cantidad de multiplicadores a calcular

Para imprimir en consola

```
node app listarTabla -b 9 --limite 10
```
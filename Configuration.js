function getConfiguration(config) {
    // Esta función permite indicar valores de configuración generales para 
    // todos los dispositivos de este modelo.

    // Dependiendo del significado de la "dirección del dispositivo" en este 
    // dispositivo, es posible que desee cambiar la etiqueta que se utiliza 
    // para hacer referencia a la dirección en la interfaz de usuario.
    // Por ejemplo, si la dirección del dispositivo es en realidad una dirección 
    // MAC, es posible que desee utilizar el código siguiente.

    // config.addressLabel = {en: "MAC address", es: "Dirección MAC"};
}

function getEndpoints(deviceAddress, endpoints) {
   var e1 = endpoints.addEndpoint("1", "Hora 1", endpointType.genericSensor);
e1.variableTypeId = 1314;
var e2 = endpoints.addEndpoint("2", "Hora 2", endpointType.genericSensor);
e2.variableTypeId = 1314;
var e3 = endpoints.addEndpoint("3", "Hora 3", endpointType.genericSensor);
e3.variableTypeId = 1314;
var e4 = endpoints.addEndpoint("4", "Hora 4", endpointType.genericSensor);
e4.variableTypeId = 1314;
var e5 = endpoints.addEndpoint("5", "Hora 5", endpointType.genericSensor);
e5.variableTypeId = 1314;
var e6 = endpoints.addEndpoint("6", "Hora 6", endpointType.genericSensor);
e6.variableTypeId = 1314;
var e7 = endpoints.addEndpoint("7", "Hora 7", endpointType.genericSensor);
e7.variableTypeId = 1314;
var e8 = endpoints.addEndpoint("8", "Hora 8", endpointType.genericSensor);
e8.variableTypeId = 1314;
var e9 = endpoints.addEndpoint("9", "Hora 9", endpointType.genericSensor);
e9.variableTypeId = 1314;
var e10 = endpoints.addEndpoint("10", "Hora 10", endpointType.genericSensor);
e10.variableTypeId = 1314;
var e11 = endpoints.addEndpoint("11", "Hora 11", endpointType.genericSensor);
e11.variableTypeId = 1314;
var e12 = endpoints.addEndpoint("12", "Hora 12", endpointType.genericSensor);
e12.variableTypeId = 1314;
var e13 = endpoints.addEndpoint("13", "Hora 13", endpointType.genericSensor);
e13.variableTypeId = 1314;
var e14 = endpoints.addEndpoint("14", "Hora 14", endpointType.genericSensor);
e14.variableTypeId = 1314;
var e15 = endpoints.addEndpoint("15", "Hora 15", endpointType.genericSensor);
e15.variableTypeId = 1314;
var e16 = endpoints.addEndpoint("16", "Hora 16", endpointType.genericSensor);
e16.variableTypeId = 1314;
var e17 = endpoints.addEndpoint("17", "Hora 17", endpointType.genericSensor);
e17.variableTypeId = 1314;
var e18 = endpoints.addEndpoint("18", "Hora 18", endpointType.genericSensor);
e18.variableTypeId = 1314;
var e19 = endpoints.addEndpoint("19", "Hora 19", endpointType.genericSensor);
e19.variableTypeId = 1314;
var e20 = endpoints.addEndpoint("20", "Hora 20", endpointType.genericSensor);
e20.variableTypeId = 1314;
var e21 = endpoints.addEndpoint("21", "Hora 21", endpointType.genericSensor);
e21.variableTypeId = 1314;
var e22 = endpoints.addEndpoint("22", "Hora 22", endpointType.genericSensor);
e22.variableTypeId = 1314;
var e23 = endpoints.addEndpoint("23", "Hora 23", endpointType.genericSensor);
e23.variableTypeId = 1314;
var e24 = endpoints.addEndpoint("24", "Hora 24", endpointType.genericSensor);
e24.variableTypeId = 1314;
//EndpointTemp1
var e25 = endpoints.addEndpoint("25", "Temperatura 25", endpointType.genericSensor);
e25.variableTypeId = 1306;
var e26 = endpoints.addEndpoint("26", "Temperatura 26", endpointType.genericSensor);
e26.variableTypeId = 1306;
var e27 = endpoints.addEndpoint("27", "Temperatura 27", endpointType.genericSensor);
e27.variableTypeId = 1306;
var e28 = endpoints.addEndpoint("28", "Temperatura 28", endpointType.genericSensor);
e28.variableTypeId = 1306;
var e29 = endpoints.addEndpoint("29", "Temperatura 29", endpointType.genericSensor);
e29.variableTypeId = 1306;
var e30 = endpoints.addEndpoint("30", "Temperatura 30", endpointType.genericSensor);
e30.variableTypeId = 1306;
var e31 = endpoints.addEndpoint("31", "Temperatura 31", endpointType.genericSensor);
e31.variableTypeId = 1306;
var e32 = endpoints.addEndpoint("32", "Temperatura 32", endpointType.genericSensor);
e32.variableTypeId = 1306;
var e33 = endpoints.addEndpoint("33", "Temperatura 33", endpointType.genericSensor);
e33.variableTypeId = 1306;
var e34 = endpoints.addEndpoint("34", "Temperatura 34", endpointType.genericSensor);
e34.variableTypeId = 1306;
var e35 = endpoints.addEndpoint("35", "Temperatura 35", endpointType.genericSensor);
e35.variableTypeId = 1306;
var e36 = endpoints.addEndpoint("36", "Temperatura 36", endpointType.genericSensor);
e36.variableTypeId = 1306;
var e37 = endpoints.addEndpoint("37", "Temperatura 37", endpointType.genericSensor);
e37.variableTypeId = 1306;
var e38 = endpoints.addEndpoint("38", "Temperatura 38", endpointType.genericSensor);
e38.variableTypeId = 1306;
var e39 = endpoints.addEndpoint("39", "Temperatura 39", endpointType.genericSensor);
e39.variableTypeId = 1306;
var e40 = endpoints.addEndpoint("40", "Temperatura 40", endpointType.genericSensor);
e40.variableTypeId = 1306;
var e41 = endpoints.addEndpoint("41", "Temperatura 41", endpointType.genericSensor);
e41.variableTypeId = 1306;
var e42 = endpoints.addEndpoint("42", "Temperatura 42", endpointType.genericSensor);
e42.variableTypeId = 1306;
var e43 = endpoints.addEndpoint("43", "Temperatura 43", endpointType.genericSensor);
e43.variableTypeId = 1306;
var e44 = endpoints.addEndpoint("44", "Temperatura 44", endpointType.genericSensor);
e44.variableTypeId = 1306;
var e45 = endpoints.addEndpoint("45", "Temperatura 45", endpointType.genericSensor);
e45.variableTypeId = 1306;
var e46 = endpoints.addEndpoint("46", "Temperatura 46", endpointType.genericSensor);
e46.variableTypeId = 1306;
var e47 = endpoints.addEndpoint("47", "Temperatura 47", endpointType.genericSensor);
e47.variableTypeId = 1306;
var e48 = endpoints.addEndpoint("48", "Temperatura 48", endpointType.genericSensor);
e48.variableTypeId = 1306;
//EndpointTemp2
var e49 = endpoints.addEndpoint("49", "Temperatura 49", endpointType.genericSensor);
e49.variableTypeId = 1306;
var e50 = endpoints.addEndpoint("50", "Temperatura 50", endpointType.genericSensor);
e50.variableTypeId = 1306;
var e51 = endpoints.addEndpoint("51", "Temperatura 51", endpointType.genericSensor);
e51.variableTypeId = 1306;
var e52 = endpoints.addEndpoint("52", "Temperatura 52", endpointType.genericSensor);
e52.variableTypeId = 1306;
var e53 = endpoints.addEndpoint("53", "Temperatura 53", endpointType.genericSensor);
e53.variableTypeId = 1306;
var e54 = endpoints.addEndpoint("54", "Temperatura 54", endpointType.genericSensor);
e54.variableTypeId = 1306;
var e55 = endpoints.addEndpoint("55", "Temperatura 55", endpointType.genericSensor);
e55.variableTypeId = 1306;
var e56 = endpoints.addEndpoint("56", "Temperatura 56", endpointType.genericSensor);
e56.variableTypeId = 1306;
var e57 = endpoints.addEndpoint("57", "Temperatura 57", endpointType.genericSensor);
e57.variableTypeId = 1306;
var e58 = endpoints.addEndpoint("58", "Temperatura 58", endpointType.genericSensor);
e58.variableTypeId = 1306;
var e59 = endpoints.addEndpoint("59", "Temperatura 59", endpointType.genericSensor);
e59.variableTypeId = 1306;
var e60 = endpoints.addEndpoint("60", "Temperatura 60", endpointType.genericSensor);
e60.variableTypeId = 1306;
var e61 = endpoints.addEndpoint("61", "Temperatura 61", endpointType.genericSensor);
e61.variableTypeId = 1306;
var e62 = endpoints.addEndpoint("62", "Temperatura 62", endpointType.genericSensor);
e62.variableTypeId = 1306;
var e63 = endpoints.addEndpoint("63", "Temperatura 63", endpointType.genericSensor);
e63.variableTypeId = 1306;
var e64 = endpoints.addEndpoint("64", "Temperatura 64", endpointType.genericSensor);
e64.variableTypeId = 1306;
var e65 = endpoints.addEndpoint("65", "Temperatura 65", endpointType.genericSensor);
e65.variableTypeId = 1306;
var e66 = endpoints.addEndpoint("66", "Temperatura 66", endpointType.genericSensor);
e66.variableTypeId = 1306;
var e67 = endpoints.addEndpoint("67", "Temperatura 67", endpointType.genericSensor);
e67.variableTypeId = 1306;
var e68 = endpoints.addEndpoint("68", "Temperatura 68", endpointType.genericSensor);
e68.variableTypeId = 1306;
var e69 = endpoints.addEndpoint("69", "Temperatura 69", endpointType.genericSensor);
e69.variableTypeId = 1306;
var e70 = endpoints.addEndpoint("70", "Temperatura 70", endpointType.genericSensor);
e70.variableTypeId = 1306;
var e71 = endpoints.addEndpoint("71", "Temperatura 71", endpointType.genericSensor);
e71.variableTypeId = 1306;
var e72 = endpoints.addEndpoint("72", "Temperatura 72", endpointType.genericSensor);
e72.variableTypeId = 1306;
//EndpointTemp3
var e73 = endpoints.addEndpoint("73", "Temperatura 73", endpointType.genericSensor);
e73.variableTypeId = 1306;
var e74 = endpoints.addEndpoint("74", "Temperatura 74", endpointType.genericSensor);
e74.variableTypeId = 1306;
var e75 = endpoints.addEndpoint("75", "Temperatura 75", endpointType.genericSensor);
e75.variableTypeId = 1306;
var e76 = endpoints.addEndpoint("76", "Temperatura 76", endpointType.genericSensor);
e76.variableTypeId = 1306;
var e77 = endpoints.addEndpoint("77", "Temperatura 77", endpointType.genericSensor);
e77.variableTypeId = 1306;
var e78 = endpoints.addEndpoint("78", "Temperatura 78", endpointType.genericSensor);
e78.variableTypeId = 1306;
var e79 = endpoints.addEndpoint("79", "Temperatura 79", endpointType.genericSensor);
e79.variableTypeId = 1306;
var e80 = endpoints.addEndpoint("80", "Temperatura 80", endpointType.genericSensor);
e80.variableTypeId = 1306;
var e81 = endpoints.addEndpoint("81", "Temperatura 81", endpointType.genericSensor);
e81.variableTypeId = 1306;
var e82 = endpoints.addEndpoint("82", "Temperatura 82", endpointType.genericSensor);
e82.variableTypeId = 1306;
var e83 = endpoints.addEndpoint("83", "Temperatura 83", endpointType.genericSensor);
e83.variableTypeId = 1306;
var e84 = endpoints.addEndpoint("84", "Temperatura 84", endpointType.genericSensor);
e84.variableTypeId = 1306;
var e85 = endpoints.addEndpoint("85", "Temperatura 85", endpointType.genericSensor);
e85.variableTypeId = 1306;
var e86 = endpoints.addEndpoint("86", "Temperatura 86", endpointType.genericSensor);
e86.variableTypeId = 1306;
var e87 = endpoints.addEndpoint("87", "Temperatura 87", endpointType.genericSensor);
e87.variableTypeId = 1306;
var e88 = endpoints.addEndpoint("88", "Temperatura 88", endpointType.genericSensor);
e88.variableTypeId = 1306;
var e89 = endpoints.addEndpoint("89", "Temperatura 89", endpointType.genericSensor);
e89.variableTypeId = 1306;
var e90 = endpoints.addEndpoint("90", "Temperatura 90", endpointType.genericSensor);
e90.variableTypeId = 1306;
var e91 = endpoints.addEndpoint("91", "Temperatura 91", endpointType.genericSensor);
e91.variableTypeId = 1306;
var e92 = endpoints.addEndpoint("92", "Temperatura 92", endpointType.genericSensor);
e92.variableTypeId = 1306;
var e93 = endpoints.addEndpoint("93", "Temperatura 93", endpointType.genericSensor);
e93.variableTypeId = 1306;
var e94 = endpoints.addEndpoint("94", "Temperatura 94", endpointType.genericSensor);
e94.variableTypeId = 1306;
var e95 = endpoints.addEndpoint("95", "Temperatura 95", endpointType.genericSensor);
e95.variableTypeId = 1306;
var e96 = endpoints.addEndpoint("96", "Temperatura 96", endpointType.genericSensor);
e96.variableTypeId = 1306;
//EndpointTemp4
var e97 = endpoints.addEndpoint("97", "Temperatura 97", endpointType.genericSensor);
e97.variableTypeId = 1306;
var e98 = endpoints.addEndpoint("98", "Temperatura 98", endpointType.genericSensor);
e98.variableTypeId = 1306;
var e99 = endpoints.addEndpoint("99", "Temperatura 99", endpointType.genericSensor);
e99.variableTypeId = 1306;
var e100 = endpoints.addEndpoint("100", "Temperatura 100", endpointType.genericSensor);
e100.variableTypeId = 1306;
var e101 = endpoints.addEndpoint("101", "Temperatura 101", endpointType.genericSensor);
e101.variableTypeId = 1306;
var e102 = endpoints.addEndpoint("102", "Temperatura 102", endpointType.genericSensor);
e102.variableTypeId = 1306;
var e103 = endpoints.addEndpoint("103", "Temperatura 103", endpointType.genericSensor);
e103.variableTypeId = 1306;
var e104 = endpoints.addEndpoint("104", "Temperatura 104", endpointType.genericSensor);
e104.variableTypeId = 1306;
var e105 = endpoints.addEndpoint("105", "Temperatura 105", endpointType.genericSensor);
e105.variableTypeId = 1306;
var e106 = endpoints.addEndpoint("106", "Temperatura 106", endpointType.genericSensor);
e106.variableTypeId = 1306;
var e107 = endpoints.addEndpoint("107", "Temperatura 107", endpointType.genericSensor);
e107.variableTypeId = 1306;
var e108 = endpoints.addEndpoint("108", "Temperatura 108", endpointType.genericSensor);
e108.variableTypeId = 1306;
var e109 = endpoints.addEndpoint("109", "Temperatura 109", endpointType.genericSensor);
e109.variableTypeId = 1306;
var e110 = endpoints.addEndpoint("110", "Temperatura 110", endpointType.genericSensor);
e110.variableTypeId = 1306;
var e111 = endpoints.addEndpoint("111", "Temperatura 111", endpointType.genericSensor);
e111.variableTypeId = 1306;
var e112 = endpoints.addEndpoint("112", "Temperatura 112", endpointType.genericSensor);
e112.variableTypeId = 1306;
var e113 = endpoints.addEndpoint("113", "Temperatura 113", endpointType.genericSensor);
e113.variableTypeId = 1306;
var e114 = endpoints.addEndpoint("114", "Temperatura 114", endpointType.genericSensor);
e114.variableTypeId = 1306;
var e115 = endpoints.addEndpoint("115", "Temperatura 115", endpointType.genericSensor);
e115.variableTypeId = 1306;
var e116 = endpoints.addEndpoint("116", "Temperatura 116", endpointType.genericSensor);
e116.variableTypeId = 1306;
var e117 = endpoints.addEndpoint("117", "Temperatura 117", endpointType.genericSensor);
e117.variableTypeId = 1306;
var e118 = endpoints.addEndpoint("118", "Temperatura 118", endpointType.genericSensor);
e118.variableTypeId = 1306;
var e119 = endpoints.addEndpoint("119", "Temperatura 119", endpointType.genericSensor);
e119.variableTypeId = 1306;
var e120 = endpoints.addEndpoint("120", "Temperatura 120", endpointType.genericSensor);
e120.variableTypeId = 1306;
}

function validateDeviceAddress(address, result) {
    // Esta función permite validar la dirección de un dispositivo, cuando el usuario 
    // lo está creando. Si el dispositivo tiene reglas de validación especiales para 
    // la dirección, pueden verificarse aquí y devolver un mensaje de error en 
    // caso de que el formato de la dirección sea incorrecto.

    // En el código siguiente, se realiza una validación para asegurarse de que la 
    // dirección tiene exactamente 10 caracteres.

    // if (address.length != 10) {
    //   result.ok = false;
    //   result.errorMessage = {
    //     en: "The address must be 10 characters long", 
    //     es: "La dirección debe tener exactamente 10 caracteres"
    //   };
    // }
}

function updateDeviceUIRules(device, rules) {
    // Esta función permite especificar reglas de interfaz de usuario en el nivel de 
    // dispositivo. Por ejemplo, es posible habilitar o deshabilitar la creación 
    // de endpoints manualmente al dispositivo después de que se creó.

    // En el código siguiente, el agregado manual de endpoints está deshabilitada 
    // en la interfaz de usuario. Esto significa que el dispositivo se limitará a los 
    // endpoints definidos por la función getEndpoints() anterior.

    rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules) {
    // Esta función permite especificar reglas de interfaz de usuario para cada
    // endpoint del dispositivo. Por ejemplo, es posible habilitar o inhabilitar la
    // eliminación de endpoints, o la edición de subtipo de endpoint.

    // En el código siguiente, se definen las siguientes reglas:
    // - Los endpoints no se pueden eliminar.
    // - El subtipo de endpoint se puede cambiar, pero solo para el segundo endpoint.

    // rules.canDelete = false;
    // rules.canEditSubType = (endpoint.address == "2");
}

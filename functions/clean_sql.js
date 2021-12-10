// module.exports = function clean_sql_de_travian() {
module.exports = function clean_sql_de_travian(DATA_FROM_TG) {

    console.log("=========== FUNC CLEAN SQL ===========")
    console.log("cleaned_sql step 1")
    // let DATA_FROM_TG = await getData_new_SQL(server,url);

    // DATA_FROM_TG =
    //     `INSERT INTO \`x_world\` VALUES (62,-139,200,1,19596,'AZERAZER',2388,'dada49',30,'ALONE',222,null); 
    // INSERT INTO \`x_world\` VALUES (716,114,199,2,20571,'00A60',586,'stopol',77,'DvG',145,null);
    // INSERT INTO \`x_world\` VALUES (717,115,199,2,7154,'00 capi',586,'stopol',77,'DvG',491,null);
    // INSERT INTO \`x_world\` VALUES (1117,114,198,1,20833,'00B60',1880,'loki',77,'DvG',92,null);
    // INSERT INTO \`x_world\` VALUES (1118,115,198,2,19838,'00A70',586,'stopol',77,'DvG',409,null);
    // INSERT INTO \`x_world\` VALUES (1124,121,198,1,19982,'00freia',1880,'loki',77,'DvG',152,null);
    // INSERT INTO \`x_world\` VALUES (1523,119,197,1,18959,'00thor',1880,'loki',77,'DvG',603,null);
    // INSERT INTO \`x_world\` VALUES (3583,174,192,3,20511,'V 02',3016,'hayot',171,'N.A',300,null);
    // INSERT INTO \`x_world\` VALUES (3586,177,192,3,19483,'V 01',3016,'hayot',171,'',0,null);
    // INSERT INTO \`x_world\` VALUES (4042,-169,190,3,20362,'2',761,'Neywok',0,'',11,null);
    // INSERT INTO \`x_world\` VALUES (4045,-166,190,3,19236,'1',761,'Neywok',0,'',180,null);`


    DATA_FROM_TG = ");" + DATA_FROM_TG.replace(/\r|\n/g, '').replace(/\); +INSERT INTO `x_world` VALUES \(/g, ');INSERT INTO `x_world` VALUES (');
    console.log("cleaned_sql step 2")
    let DATA_FROM_TG_ARRAY = DATA_FROM_TG.split(');INSERT INTO `x_world` VALUES (');
    DATA_FROM_TG_ARRAY[0] = DATA_FROM_TG_ARRAY[0].substring(34);
    console.log("cleaned_sql step 3")
    // let aaa = DATA_FROM_TG_ARRAY.shift();
    DATA_FROM_TG_ARRAY.shift();
    console.log("cleaned_sql step 4")
    let testYY;

    testYY = DATA_FROM_TG_ARRAY;
    console.log("cleaned_sql ok")
    // console.log(testYY)

    return testYY;

}
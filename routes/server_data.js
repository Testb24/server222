/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();

const serverCtrl = require('../controllers/server_data');
// const auth = require('../middleware/auth');
// const authGroup = require('../middleware/authGroup');




router.get('/:server/general', serverCtrl.statServer);





router.get('/:server/ally/:id', serverCtrl.statAllyOne);
router.get('/:server/player/:id', serverCtrl.statPlayerOne);
router.get('/:server/town/:id', serverCtrl.statTownOne);






// router.get("/:server/ally", auth, authGroup, serverCtrl.statAlly);
router.get("/:server/ally", serverCtrl.statAlly);
router.get("/:server/player", serverCtrl.statPlayer);
router.get("/:server/town", serverCtrl.statTown);

router.get("/:server/town/:dist/:x/:y", serverCtrl.statTownDistRaid);





router.get("/:server/sql", serverCtrl.statServerSQL);




router.post("/:server/sql/player", serverCtrl.savePlayerData);
router.put("/:server/sql/player", serverCtrl.updatePlayerData);

router.post("/:server/sql/ally", serverCtrl.saveAllyData);
router.put("/:server/sql/ally", serverCtrl.updateAllyData);

router.post("/:server/sql/town", serverCtrl.saveTownData);
router.put("/:server/sql/town", serverCtrl.updateTownData);


router.post("/:server/sql/array", serverCtrl.saveArray);
router.put("/:server/sql/array", serverCtrl.updateArray);


router.post("/:server/test/test", serverCtrl.statServerSQL_AUTO3);

module.exports = router;
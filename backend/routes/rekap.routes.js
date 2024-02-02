import express from "express";
import rekapController from "../controllers/rekapController.js";

const router = express.Router();

router.get("/ballot", rekapController.getAllTpsResult);
router.get(
  "/ballot-district/:districtId",
  rekapController.getAllTpsResultByDistrictId
);
router.get("/districts", rekapController.getAllDistrictWithResultVotes);
router.get(
  "/villages/:districtId",
  rekapController.getAllVillageByDistrictIdWithResultVote
);
router.get("/tps", rekapController.getAllTps);
router.get("/tps/:districtId", rekapController.getAllTpsByDistrictId);
router.get(
  "/tps/:villageId",
  rekapController.getAllTpsByVillageIdWithResultVote
);

<<<<<<< HEAD
export default router;
=======
router.get('/caleg', rekapController.getAllCalegsRekap)
router.get(
  '/caleg/district/:districtId',
  rekapController.getAllCalegsRekapByDistrictId
)
router.get(
  '/caleg/village/:villageId',
  rekapController.getAllCalegsRekapByVillageId
)

export default router
>>>>>>> 88b487ac49ceb0aa13abdf7ca527b0cbad596df2

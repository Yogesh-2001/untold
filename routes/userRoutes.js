import express from "express";
import {
  createProfileCtrl,
  getAllDrives,
  getallplacedcompanies,
  getProfile,
  updateProfile,
  getDrive,
  applyDrive,
  getAllAppliedDrives,
  getProfileUrl,
  getAllTests,
  getAllAddedMaterial,
} from "../controllers/userController.js";

//router object
const router = express.Router();

router.post("/create-profile", createProfileCtrl);
router.get("/get-all-drives", getAllDrives);
router.get("/get-profile-details/:id", getProfile);
router.get("/get-all-companies/:id", getallplacedcompanies);
router.put("/update-profile", updateProfile);
router.get("/get-drive/:id", getDrive);
router.put("/apply-drive/:id", applyDrive);
router.get("/get-all-applied-drives/:id", getAllAppliedDrives);
router.get("/get-profile-url/:id", getProfileUrl);
router.get("/get-all-tests", getAllTests);
router.get("/get-all-materials", getAllAddedMaterial);
// router.get("/get-profile/:id",getProfile);
export default router;

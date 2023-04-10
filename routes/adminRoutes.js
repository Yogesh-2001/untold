import express from "express";
import {
  addNotice,
  addStudents,
  addPlacement,
  allstudents,
  addPlacedStudent,
  getAllPlaced,
  sendMailNotification,
  createTest,
  getAllPlacedStudents,
} from "../controllers/adminControllers.js";

//router object
const router = express.Router();

router.post("/add-student", addStudents);
router.post("/add-placement", addPlacement);
router.post("/add-notice", addNotice);
router.get("/get-allstudents", allstudents);
router.post("/add-placed-students", addPlacedStudent);
router.get("/get-all-placed", getAllPlaced);
router.post("/send-email-notification", sendMailNotification);
router.post("/create-test", createTest);
router.get("/all-placed-student", getAllPlacedStudents);
export default router;

import React from 'react';
// import Navbar from './componets/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './containers/Homepage/Home';
import Clinics from './containers/Homepage/Clinics';
import More from './containers/Homepage/clinic_more_details/More';
import Appointmentform from './containers/book_appintment/Appointmentform';
import ProfilePage from './containers/profile_page/profile/ProfilePage';
import ScrollToTop from './componets/ScrollToTop';
import MedicalNotes from './containers/medical_notes/MedicalNotes';
import MyAppointments from './containers/My_Appointments/MyAppointments.';
import FamilyMembers from './containers/Family_Members/FamilyMembers';
import Medication from './containers/Medication/MedicationPage/Medication';
import Prescription from './containers/Medication/PrescriptionPage/Prescription';
import ViewPrescription from './containers/Medication/View Prescription/ViewPrescription';
import NoAppointment from './containers/No_Appointment/NoAppointment';
import PreFill from './containers/No_Appointment/Pre-Form/PreFill';
import PatientForm from './containers/No_Appointment/No_Appt_Form/PatientForm';
import WithAppointments from './containers/With Appointments/WithAppointments';
import Add from './containers/Family_Members/Add Family Members/Add';
import ViewFamilyProfile from './containers/Family_Members/View family Member/ViewFamilyProfile';
import BottomNavBar from './componets/Bottonav/BottomNavBar';
import ProfileEdit from './containers/profile_page/profile_edit/ProfileEdit';
import SendPrescription from './containers/Medication/Send Prescription/SendPrescription';
import History from './containers/My_Appointments/History/History';
import PatientReferral from './containers/Patient Referral/PatientReferral';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      {/* <Navbar/> */}
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        {/* clinics pages */}
        <Route exact path="/clinics" component={Clinics}>
        </Route>
        <Route exact path="/clinic-details" component={More}>
        </Route>
        <Route exact path="/appointment-form" component={Appointmentform}>
        </Route>
        <Route exact path="/walk-in's" component={NoAppointment}>
        </Route>
        <Route exact path="/pre-form" component={PreFill}>
        </Route>
        <Route exact path="/Application-form" component={PatientForm}>
        </Route>
        <Route exact path="/clinic-appointments" component={WithAppointments}>
        </Route>
        
        
        
      

         {/* Profile Pages */}
        <Route exact path="/profile-page" component={ProfilePage}>
        </Route>
        <Route exact path="/edit-profile" component={ProfileEdit}>
        </Route>
        
        
        

        
        {/* Medical notes */}
        <Route exact path="/medical_notes" component={MedicalNotes}>
        </Route>

        {/* My Appointments */}
        <Route exact path="/my-appointments" component={MyAppointments}>
        </Route>
        <Route exact path="/appointments/history" component={History}>
        </Route>

         {/* Family */}
        <Route exact path="/family" component={FamilyMembers}>
        </Route>
        <Route exact path="/add-family-members" component={Add}>
        </Route>
        <Route exact path="/family-profile" component={ViewFamilyProfile}>
        </Route>
        
        
        
        {/* Medication */}
        <Route exact path="/medication" component={Medication}>
        </Route>
        {/* Medication / Prescription*/}
        <Route exact path="/e-prescription" component={Prescription}>
        </Route>
        <Route exact path="/view-prescription" component={ViewPrescription}>
        </Route>
        <Route exact path="/send-prescription" component={SendPrescription}>
        </Route>

        {/* Patient Referral*/}
        <Route exact path="/pateint-referral" component={PatientReferral}>
        </Route>

      </Switch>
       <BottomNavBar/>
    </Router>
  );
}

export default App;

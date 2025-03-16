import { updateStatus, deleteOne } from '@/utils/dbFns/databaseFn';

const ADMIN_EMAILS = [
  "ecyking72345@gmail.com",
  "rodkuhnking@gmail.com"
  // "another.approved@email.com",
  // "someone.else@email.com"
];

const acceptCard = (title, mongoID, setShow) => {
        updateStatus(title, mongoID)
        console.log("WE HAVE ACCEPTED THE CARD")
        setShow(false) // closes modal, resets hopefully!
}

const declineCard = (title, mongoID, setShow) => {
        console.log("title and mongo id are", title, mongoID)
        deleteOne(title, mongoID)
        setShow(false) // closes modal, resets hopefully! doesn't trigger reset
        console.log("WE HAVE DELETED THE CARD")
}



const isAdmin = (email) => {
  return ADMIN_EMAILS.includes(email);
};
export {acceptCard, declineCard, isAdmin}
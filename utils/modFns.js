import { updateStatus, deleteOne } from '@/utils/dbFns/databaseFn';

// TODO: make env vars
const ADMIN_EMAILS = [
  "ecyking72345@gmail.com",
  "rodkuhnhking@gmail.com"
  // "another.approved@email.com",
  // "someone.else@email.com"
];

const acceptCard = (title, mongoID, setShow) => {
        updateStatus(title, mongoID)
        setShow(false) // closes modal, resets hopefully!
}

const declineCard = (title, mongoID, setShow) => {
        console.log("title and mongo id are", title, mongoID)
        deleteOne(title, mongoID)
        setShow(false) // closes modal, resets hopefully! doesn't trigger reset
}

const isAdmin = (email) => {
  return ADMIN_EMAILS.includes(email);
};

export {acceptCard, declineCard, isAdmin}
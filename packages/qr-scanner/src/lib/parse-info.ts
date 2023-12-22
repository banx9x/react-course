import dayjs from 'dayjs';

export const parseInfo = (decodedText: string) => {
  const [
    citizenIdentifierId,
    oldCitizenIdentifierId,
    fullName,
    dateOfBirth,
    gender,
    address,
    issueDate,
  ] = decodedText.split('|');

  return {
    citizenIdentifierId,
    oldCitizenIdentifierId,
    fullName,
    dateOfBirth: dayjs(dateOfBirth, 'DDMMYYYY'),
    gender,
    address,
    issueDate: dayjs(issueDate, 'DDMMYYYY'),
  };
};

import { GET } from './apiHelper/apiWrapper';
import { API_BASE_URL, TICKET_ASSIGMENT } from './apiUrl.constants';

export const getTicketAssignments = async () => {
  return await GET(`${API_BASE_URL}${TICKET_ASSIGMENT}`);
}
export interface Contact {
    id: number;
    first: string;
    last: string;
    twitter: string;
    avatar: string;
    notes: string;
    favorite: boolean;
  }
  
  let contacts: Contact[] = [
    {
      id: 1,
      first: "John",
      last: "Doe",
      twitter: "@johndoe",
      avatar: "https://placekitten.com/200/200",
      notes: "Some notes about John Doe.",
      favorite: true,
    },
    {
      id: 2,
      first: "Jane",
      last: "Smith",
      twitter: "@janesmith",
      avatar: "https://placekitten.com/200/200",
      notes: "Some notes about Jane Smith.",
      favorite: false,
    },
  ];
  
  export async function getContacts(query?: string): Promise<Contact[]> {
    return new Promise((resolve) => {
      if (!query) {
        resolve(contacts);
      } else {
        const filteredContacts = contacts.filter(
          (contact) =>
            contact.first.toLowerCase().includes(query.toLowerCase()) ||
            contact.last.toLowerCase().includes(query.toLowerCase())
        );
        resolve(filteredContacts);
      }
    });
  }
  
  export async function getContact(contactId: number): Promise<Contact | undefined> {
    return new Promise((resolve) => {
      const contact = contacts.find((c) => c.id === contactId);
      resolve(contact);
    });
  }
  
  export async function createEmptyContact(): Promise<Contact> {
    return new Promise((resolve) => {
      const newId = contacts.length + 1;
      const newContact: Contact = {
        id: newId,
        first: "",
        last: "",
        twitter: "",
        avatar: "",
        notes: "",
        favorite: false,
      };
      resolve(newContact);
    });
  }
  
  export async function updateContact(contactId: number, updates: Partial<Contact>): Promise<void> {
    return new Promise((resolve) => {
      const index = contacts.findIndex((c) => c.id === contactId);
      if (index !== -1) {
        contacts[index] = {
          ...contacts[index],
          ...updates,
        };
      }
      resolve();
    });
  }
  
  export async function deleteContact(contactId: number): Promise<void> {
    return new Promise((resolve) => {
      contacts = contacts.filter((c) => c.id !== contactId);
      resolve();
    });
  }
  
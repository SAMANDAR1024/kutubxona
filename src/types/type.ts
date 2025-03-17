export type StudentType = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: "male" | "female";
  active: boolean;
  
};

export type GroupType={
    id: number
    name: string,
    students_count: number,
    active: boolean,
}



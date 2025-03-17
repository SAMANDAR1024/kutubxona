import { Button, Switch, Table } from "antd";
import { useGlobalStore } from "../store/store";
import { StudentForm } from "./StudentForm";

export function StudentPage() {
  const groups = useGlobalStore((state) => state.groups);
  const students = useGlobalStore((state) => state.students);
  console.log(students);
  return (
    <div className="container mx-auto p-10">
      <div className="flex justify-between mb-5 ">
        <h1 className="text-4xl font-bold">Students </h1>
        <StudentForm />
      </div>
      <div className="flex gap-2 pb-5">
        <Button type="primary">Umumiy: {students.length}</Button>
        <Button type="primary">
          Faollar: {students.filter((item) => item.active).length}
        </Button>
        <Button type="primary">
          NoFaollar: {students.filter((item) => !item.active).length}
        </Button>
      </div>
      <Table
        style={{ width: "1300px" }}
        columns={[
          {
            title: "ID",
            dataIndex: "id",
          },
          {
            title: "NAME",
            dataIndex: "firstName",
          },
          {
            title: "Faollik",
            dataIndex: "active",
            render: (active, student) => {
              return (
                <Switch
                  checked={active}
                  onChange={(checked) => {
                    const new_Students = students.map((item) => {
                      if (item.id === student.id) {
                        return {
                          ...item,
                          active: checked,
                        };
                      }
                      return item;
                    });

                    useGlobalStore.setState({
                      students: new_Students,
                    });
                  }}
                />
              );
            },
          },
          {
            title: "Guruh",
            dataIndex: "group_id",
            render: (group_id) => {
              const group = groups?.find((i) => {
                return group_id === i.id;
              });
              return group?.name;
            },
          },
          {
            title: "Delete",
            render: (del) => {
              return (
                <div>
                  <button 
                  className="bg-red-500 p-2 rounded-xl text-white"
                    onClick={() => {
                      const new_student = students.filter((i) => {
                        if (i.id !== del.id) {
                          return i;
                        }
                      });
                      useGlobalStore.setState({ students: new_student });
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            },
          },
        ]}
        dataSource={students}
      />
    </div>
  );
}

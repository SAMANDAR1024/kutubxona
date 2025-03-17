import { Switch, Table } from "antd";
import { useGlobalStore } from "../store/store";
import { GroupsForm } from "./GroupsForm";

export function GroupsPage() {
  const groups = useGlobalStore((state) => state.groups);
  //   const students = useGlobalStore((state) => state.students);
  //   console.log(students);
  return (
    <div className="container mx-auto p-10">
      <div className="flex justify-between mb-5 ">
        <h1 className="text-4xl font-bold">Groups </h1>
        <GroupsForm />
      </div>

      <Table
        style={{ width: "1300px" }}
        columns={[
          {
            title: "ID",
            dataIndex: "id",
          },
          {
            title: "Nomi",
            dataIndex: "name",
          },

          {
            title: "Faollik",
            dataIndex: "active",
            render: (active, group) => {
              return (
                <Switch
                  checked={active}
                  onChange={(checked) => {
                    const new_groups = groups?.map((item) => {
                      if (item.id === group.id) {
                        return {
                          ...item,
                          active: checked,
                        };
                      }
                      return item;
                    });

                    useGlobalStore.setState({
                      groups: new_groups,
                    });
                  }}
                />
              );
            },
          },
          { title: "oquvchilar soni ", dataIndex: "students_count" },
        ]}
        dataSource={groups}
      />
    </div>
  );
}

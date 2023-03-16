import { useState } from "react"
import NavBar from "@/components/NavBar"
import TaskSections from "@/components/TaskSections"
import LeftSection from "@/components/LeftSection"
import TaskBoard from "@/components/TaskBoard"
import SideBar from "@/components/SideBar"
import { BacklogTasks, Done, Inprogress, ToDoTasks } from "@/utils/taskData"
export default function Home() {
  const [sideBar, setSideBar] = useState(false)
  return (
    <>
      <div className='flex flex-col lg:flex-row bg-[#F7F8FA] min-h-screen"'>
        <LeftSection sideBar={sideBar} setSideBar={setSideBar} />
        <div className='flex-1 false lg:block ' >
          <NavBar />
          <TaskBoard />
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-[16px] md:px-[36px] pb-[28px] gap-[24px]'>
            <TaskSections task={BacklogTasks} />
            <TaskSections task={ToDoTasks} />
            <TaskSections task={Inprogress} />
            <TaskSections task={Done} />
          </div>
        </div>
        <SideBar />
      </div>
    </>
  )
}

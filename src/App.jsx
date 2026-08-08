import { BrowserRouter, Route, Routes } from "react-router-dom"
import User_Layout from "./layout/user/User_Layout"
import Home from "./components/user/Home"
import About from "./components/user/About"
import Contact from "./components/user/Contact"
import AdminLayout from "./layout/admin/Admin_Layout"
import Dashboard from "./components/admin/Dashboard"
import Donate from "./components/user/Donate"
import Gallery from "./components/user/Gallery"
import Events from "./components/user/Events"
import Blog from "./components/user/Blog"
import Blog_Single from "./components/user/BlogSingle"
import Login from "./components/user/Login"
import { ToastContainer } from "react-toastify"
import Register from "./components/user/Register"
import AddCategory from "./components/admin/category/AddCategory"
import Campaign from "./components/admin/campaign/AddCampaign"
import ManageCategory from "./components/admin/category/ManageCategory"
import AddCampaign from "./components/admin/campaign/AddCampaign"
import ManageCampaign from "./components/admin/campaign/ManageCampaign"
import Causes from "./components/user/Causes"
import Category from "./components/user/Category"
import UpdateCategory from "./components/admin/category/UpdateCategory"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<User_Layout></User_Layout>} >
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/causes" element={<Causes></Causes>} ></Route>
            <Route path="/category" element={<Category></Category>}></Route>
            <Route path="/donate" element={<Donate></Donate>} ></Route>
            <Route path="/blog" element={<Blog></Blog>}></Route>
            <Route path="/blogsingle" element={<Blog_Single></Blog_Single>}></Route>
            <Route path="/gallery" element={<Gallery></Gallery>}></Route>
            <Route path="/events" element={<Events></Events>}></Route>
            <Route path="/contact" element={<Contact></Contact>} ></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
          </Route>

          <Route path="/admin" element={<AdminLayout></AdminLayout>}>
            <Route path="/admin" element={<Dashboard></Dashboard>} ></Route>
            <Route path="/admin/category/addcategory" element={<AddCategory></AddCategory>}></Route>
            <Route path="/admin/category/managecategory" element={<ManageCategory></ManageCategory>}></Route>
            <Route path="/admin/category/updatecategory/:id" element={<UpdateCategory></UpdateCategory>}></Route>
            <Route path="/admin/campaign/addcampaign" element={<AddCampaign></AddCampaign>} ></Route>
            <Route path="/admin/campaign/managecampaign" element={<ManageCampaign></ManageCampaign>}></Route>
          </Route>

        </Routes>
      </BrowserRouter>

      <ToastContainer></ToastContainer>

    </>
  )
}

export default App


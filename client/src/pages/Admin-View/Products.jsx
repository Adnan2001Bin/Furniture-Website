import ProductImageUpload from "@/components/Admin-View/image-upload";
import AdminProductTile from "@/components/Admin-View/product-tile";
import CommonForm from "@/components/common/Form";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { addProductFormElements } from "@/Config";
import { useToast } from "@/hooks/use-toast";
import {
  addNewProduct,
  fetchAllProducts,
  editProduct,
  deleteProduct,
} from "@/store/admin/products-slice";

import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  subcategory:"",
  price: "",
  salePrice: "",
  totalStock: "",
  averageReview: 0,
};
function AdminProducts() {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] =
    useState(false);

  const [formData, setFormData] = useState(initialFormData);

  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const [currentEditedId, setCurrentEditedId] = useState(null);

  const { productList } = useSelector((state) => state.adminProducts);
  const dispatch = useDispatch();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();

    currentEditedId !== null
      ? dispatch(
          editProduct({
            id: currentEditedId,
            formData,
          })
        ).then((data) => {
          console.log(data, "edit");

          if (data?.payload?.success) {
            dispatch(fetchAllProducts());
            setFormData(initialFormData);
            setOpenCreateProductsDialog(false);
            setCurrentEditedId(null);
          }
        })
      : dispatch(
          addNewProduct({
            ...formData,
            image: uploadedImageUrl,
          })
        ).then((data) => {
          console.log(data);

          if (data?.payload?.success) {
            dispatch(fetchAllProducts());
            setOpenCreateProductsDialog(false);
            setImageFile(null);
            setFormData(initialFormData);
            toast({
              title: "Product add successfully",
            });
          }
        });
  }

  function handleDelete(getCurrentProductId){
    dispatch(deleteProduct(getCurrentProductId)).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchAllProducts());
      }
    });
  }

  
  function isFormValid() {
    return Object.keys(formData)
      .filter((currentKey) => currentKey !== "averageReview")
      .map((key) => formData[key] !== "")
      .every((item) => item);
  }


  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  console.log(productList, uploadedImageUrl, "productList");

  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button onClick={() => setOpenCreateProductsDialog(true)}>
          Add New Product
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {productList && productList.length > 0
          ? productList.map((productItem) => (
              <AdminProductTile
                setOpenCreateProductsDialog={setOpenCreateProductsDialog}
                product={productItem}
                setCurrentEditedId={setCurrentEditedId}
                setFormData={setFormData}
                handleDelete={handleDelete}
              />
            ))
          : null}
      </div>

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        <Sheet
          open={openCreateProductsDialog}
          onOpenChange={() => {
            setOpenCreateProductsDialog(false);
            setCurrentEditedId(null);
            setFormData(initialFormData);
          }}
        >
          <SheetContent side="right" className="overflow-auto">
            <SheetHeader>
              <SheetTitle>
                {currentEditedId !== null ? "Edit Product" : "Add New Product"}
              </SheetTitle>
            </SheetHeader>

            <ProductImageUpload
              imageFile={imageFile}
              setImageFile={setImageFile}
              uploadedImageUrl={uploadedImageUrl}
              setUploadedImageUrl={setUploadedImageUrl}
              setImageLoadingState={setImageLoadingState}
              imageLoadingState={imageLoadingState}
              isEditMode={currentEditedId !== null}
            />
            <div className="py-6 ">
              <CommonForm
                onSubmit={onSubmit}
                formData={formData}
                setFormData={setFormData}
                formControls={addProductFormElements}
                buttonText={currentEditedId !== null ? "Edit" : "Add"}
                className="py-6"
                isBtnDisabled={!isFormValid()}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Fragment>
  );
}

export default AdminProducts;

// import ProductImageUpload from "@/components/Admin-View/image-upload";
// import AdminProductTile from "@/components/Admin-View/product-tile";
// import CommonForm from "@/components/common/Form";
// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
// } from "@/components/ui/sheet";
// import { addProductFormElements } from "@/Config";
// import { useToast } from "@/hooks/use-toast";
// import {
//   addNewProduct,
//   fetchAllProducts,
//   editProduct,
//   deleteProduct,
// } from "@/store/admin/products-slice";

// import React, { Fragment, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// const initialFormData = {
//   image: null,
//   title: "",
//   description: "",
//   category: "",
//   bedroom: "",
//   dinningroom: "",
//   livingRoom: "",
//   office: "",
//   door: "",
//   price: "",
//   salePrice: "",
//   totalStock: "",
//   averageReview: 0,
// };
// function AdminProducts() {
//   const [openCreateProductsDialog, setOpenCreateProductsDialog] =
//     useState(false);

//   const [formData, setFormData] = useState(initialFormData);

//   const [imageFile, setImageFile] = useState(null);
//   const [uploadedImageUrl, setUploadedImageUrl] = useState("");
//   const [imageLoadingState, setImageLoadingState] = useState(false);
//   const [currentEditedId, setCurrentEditedId] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState(""); // Track the selected category

//   const { productList } = useSelector((state) => state.adminProducts);
//   const dispatch = useDispatch();
//   const { toast } = useToast();

//   const categoryMapping = {
//     bedroom: ["bedroom"],
//     dinningroom: ["dinningroom"],
//     livingroom: ["livingRoom"],
//     office: ["office"],
//     door: ["door"],
//   };

//   // Filter form elements based on selected category
//   const filteredFormElements = addProductFormElements.filter((element) => {
//     if (element.name === "category") return true; // Always show the category dropdown
//     if (categoryMapping[selectedCategory]?.includes(element.name)) return true;
//     if (
//       ["title", "description", "price", "salePrice", "totalStock"].includes(
//         element.name
//       )
//     )
//       return true;
//     return false;
//   });

//   function onSubmit(event) {
//     event.preventDefault();

//     currentEditedId !== null
//       ? dispatch(
//           editProduct({
//             id: currentEditedId,
//             formData,
//           })
//         ).then((data) => {
//           console.log(data, "edit");

//           if (data?.payload?.success) {
//             dispatch(fetchAllProducts());
//             setFormData(initialFormData);
//             setOpenCreateProductsDialog(false);
//             setCurrentEditedId(null);
//           }
//         })
//       : dispatch(
//           addNewProduct({
//             ...formData,
//             image: uploadedImageUrl,
//           })
//         ).then((data) => {
//           console.log(data);

//           if (data?.payload?.success) {
//             dispatch(fetchAllProducts());
//             setOpenCreateProductsDialog(false);
//             setImageFile(null);
//             setFormData(initialFormData);
//             toast({
//               title: "Product add successfully",
//             });
//           }
//         });
//   }

//   function handleDelete(getCurrentProductId) {
//     dispatch(deleteProduct(getCurrentProductId)).then((data) => {
//       if (data?.payload?.success) {
//         dispatch(fetchAllProducts());
//       }
//     });
//   }

//   function isFormValid() {
//     // Ensure 'title' and 'averageReview' are filled
//     const requiredFieldsValid = formData.title !== "" && formData.averageReview !== "" && formData.price !== "" && formData.category !== ""  && formData.salePrice && formData.totalStock;
  
//     // Ensure at least one of the remaining fields is filled (price, category, etc.)
//     const atLeastOneOtherFieldFilled =
//        formData.door !== "" || formData.bedroom !== "" || formData.dinningroom !== "" || formData.livingRoom !== "" || formData.office !== "";
  
//     return requiredFieldsValid && atLeastOneOtherFieldFilled;
//   }
  


//   useEffect(() => {
//     dispatch(fetchAllProducts());
//   }, [dispatch]);
//   console.log(productList, uploadedImageUrl, "productList");

//   return (
//     <Fragment>
//       <div className="mb-5 w-full flex justify-end">
//         <Button onClick={() => setOpenCreateProductsDialog(true)}>
//           Add New Product
//         </Button>
//       </div>

//       <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
//         {productList && productList.length > 0
//           ? productList.map((productItem) => (
//               <AdminProductTile
//                 setOpenCreateProductsDialog={setOpenCreateProductsDialog}
//                 product={productItem}
//                 setCurrentEditedId={setCurrentEditedId}
//                 setFormData={setFormData}
//                 handleDelete={handleDelete}
//               />
//             ))
//           : null}
//       </div>

//       <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
//         <Sheet
//           open={openCreateProductsDialog}
//           onOpenChange={() => {
//             setOpenCreateProductsDialog(false);
//             setCurrentEditedId(null);
//             setFormData(initialFormData);
//           }}
//         >
//           <SheetContent side="right" className="overflow-auto">
//             <SheetHeader>
//               <SheetTitle>
//                 {currentEditedId !== null ? "Edit Product" : "Add New Product"}
//               </SheetTitle>
//             </SheetHeader>

//             <ProductImageUpload
//               imageFile={imageFile}
//               setImageFile={setImageFile}
//               uploadedImageUrl={uploadedImageUrl}
//               setUploadedImageUrl={setUploadedImageUrl}
//               setImageLoadingState={setImageLoadingState}
//               imageLoadingState={imageLoadingState}
//               isEditMode={currentEditedId !== null}
//             />
//             <div className="py-6">
//               <CommonForm
//                 onSubmit={onSubmit}
//                 formData={formData}
//                 setFormData={(data) => {
//                   setFormData(data);
//                   if (data.category !== selectedCategory)
//                     setSelectedCategory(data.category);
//                 }}
//                 formControls={filteredFormElements}
//                 buttonText={currentEditedId !== null ? "Edit" : "Add"}
//                 isBtnDisabled={!isFormValid()} // Disable button based on form validity
//               />
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </Fragment>
//   );
// }

// export default AdminProducts;


import "./firstproduct.css"
export default function firstproduct({children}) {
  return (
    <div className="mt-4">
        <div className="introduction-product">
            {children}
        </div>

        <div className="underline-div"></div>
    </div>
  )
}

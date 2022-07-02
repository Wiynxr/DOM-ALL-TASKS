const root  = document.getElementById("root")
const p = document.createElement('p')
p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet non facere iste possimus molestias incidunt temporibus vero quisquam sunt eligendi,Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet non facere iste possimus molestias incidunt temporibus vero quisquam sunt eligendi,'
p.style.margin = "auto"
p.style.padding = "10px"
p.style.borderRadius = "20px"
p.style.width = "600px"
p.style.border = "2px solid brown"
p.style.textAlign = "left"

const ul = document.createElement("ul")
const intocode = document.createElement("a")
const google = document.createElement('a')
const instagram = document.createElement("a")


intocode.textContent = "intocode"
google.textContent = "google"
instagram.textContent = "instagram"

intocode.target = 'blank'
intocode.href = "#"
google.href = "#"
instagram.href = "#"


ul.style.display = "flex"
ul.style.justifyContent = "space-between"
ul.append(intocode, google, instagram)
ul.style.width = "500px"
ul.style.padding = "10px"
ul.style.margin = "auto"









root.append(p, ul)
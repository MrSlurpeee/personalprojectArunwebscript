const Profile = {
  name: "Arun Graeff",
  title: "Student",
  town: "Ottumwa", 
  School: "Indian Hills Community CollegeD"
};

export default function Page() {
  return (
    <div>
      <h2>Profile</h2>
      <p>{Profile.name}</p>
      <p>{Profile.title}</p>
    </div>
  );
}

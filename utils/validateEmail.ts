export default function validateEmail(email: string): boolean {
  console.log("validateEmail");
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

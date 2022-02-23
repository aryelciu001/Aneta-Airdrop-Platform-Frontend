export default function useBackgroundImage(bg: string) {
  return {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/" + bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
}

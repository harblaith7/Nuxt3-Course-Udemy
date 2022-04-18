export default defineNuxtRouteMiddleware(() => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn()) {
    return navigateTo("/");
  }
});

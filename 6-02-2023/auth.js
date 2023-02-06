const authorize = (req, res, next) => {
  const { user } = req.query;
  // ?user=greta

  if (user === "greta") {
    req.user = { name: "greta" };
    next();
  } else {
    console.log(user);
    res
      .status(401)
      .send(
        `Utente ${user} non è autorizzato. Torna alla <a href="/">home</a>`
      );
  }
};

module.exports = authorize;

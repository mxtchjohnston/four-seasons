const composeEmail = (data: any) => {

  const actionEmail = 
  `
  <h1><a href="https://www.4seasonslandscap.ing">4 Seasons Landscaping</a></h1> 
  <h2>${data.name} has requested a quote.</h2> 
  <h6>They can be reached at <a href="mailto:${data.email}">${data.email}</a> or a call at <a href="tel:+1${data.telephone}">${data.telephone}</a>.</h6> 
  <p>${data.body}</p>
  `;

  return actionEmail;
}

export default composeEmail;
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ulOwners = document.getElementById('owner');
const urlOwners = `https://api.github.com/repos/getify/You-Dont-Know-JS`;  

fetch(urlOwners)
  .then((resp) => resp.json())
  .then(function(data) {
      
    let owners = data;
    
    
        let p = createNode('p');
        let span = createNode('span');
        span.innerHTML = `${owners.owner.login} | ${owners.name}`;
        append(p, span);
        append(ulOwners, p);
       
})

  .catch(function(error) {
    console.log(error);
  });



const ulBranches = document.getElementById('branches');
const urlBranches = 'https://api.github.com/repos/getify/You-Dont-Know-JS/branches';


fetch(urlBranches)
.then((resp) => resp.json())
.then(function(data) {
  let branches = data;
  

    return branches.map(function(branch) {
    let branchName = `${branch.name}`
    let infoUrl = `${branch.commit.url}`
    
      
fetch(infoUrl)
  .then((resp) => resp.json())
  .then(function(dataCommit) {
  let infoCommit = dataCommit;
  
  
  let table = document.createElement('table');
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');
  let row_1 = document.createElement('tr');
  let row_2 = document.createElement('tr');
  let row_2_data_1 = document.createElement('td');
  row_2_data_1.innerHTML = ` ${branchName} `;
  let row_2_data_2 = document.createElement('td');
  row_2_data_2.innerHTML = ` ${infoCommit.commit.author.name} `;
  let row_2_data_3 = document.createElement('td');
  row_2_data_3.innerHTML = ` ${infoCommit.commit.message} `;
  let row_2_data_4 = document.createElement('td');
  row_2_data_4.innerHTML = ` ${infoCommit.commit.author.date} `;


  table.appendChild(tbody);
  thead.appendChild(row_1);
  row_2.appendChild(row_2_data_1);
  row_2.appendChild(row_2_data_2);
  row_2.appendChild(row_2_data_3);
  row_2.appendChild(row_2_data_4);
  tbody.appendChild(row_2);

document.getElementById('branches').appendChild(table);
})
    })

})
.catch(function(error) {
  console.log(error);


});



  
const ulCommits = document.getElementById('commits');
const urlCommits = `https://api.github.com/repos/getify/You-Dont-Know-JS/commits`;  

fetch(urlCommits)
  .then((resp) => resp.json())
  .then(function(data) {
    let commits = data;
    
    return commits.map(function(commit) {
        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');
        let row_1 = document.createElement('tr');
        let row_2 = document.createElement('tr');
        let row_2_data_1 = document.createElement('td');
        row_2_data_1.innerHTML = ` ${commit.commit.author.name} `;
        let row_2_data_2 = document.createElement('td');
        row_2_data_2.innerHTML = ` ${commit.commit.author.email} `;
        let row_2_data_3 = document.createElement('td');
        row_2_data_3.innerHTML = ` ${commit.commit.message} `;
        let row_2_data_4 = document.createElement('td');
        row_2_data_4.innerHTML = ` ${commit.commit.author.date} `;

        table.appendChild(tbody);
        thead.appendChild(row_1);
        row_2.appendChild(row_2_data_1);
        row_2.appendChild(row_2_data_2);
        row_2.appendChild(row_2_data_3);
        row_2.appendChild(row_2_data_4);
        tbody.appendChild(row_2);

document.getElementById('commits').appendChild(table);

    })
    })

  .catch(function(error) {
    console.log(error);
  });

const ulPrs = document.getElementById('pulls');
const urlPrs = `https://api.github.com/repos/getify/You-Dont-Know-JS/pulls`;  
// Author, Title, Description and Status
fetch(urlPrs)
  .then((resp) => resp.json())
  .then(function(data) {
    let pulls = data;
    
    return pulls.map(function(pull) {
        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');
        let row_1 = document.createElement('tr');
        let row_2 = document.createElement('tr');
        let row_2_data_1 = document.createElement('td');
        row_2_data_1.innerHTML = ` ${pull.user.login} `;
        let row_2_data_2 = document.createElement('td');
        row_2_data_2.innerHTML = ` ${pull.title} `;
        let row_2_data_3 = document.createElement('td');
        row_2_data_3.innerHTML = ` ${pull.body} `;
        let row_2_data_4 = document.createElement('td');
        row_2_data_4.innerHTML = ` ${pull.state} `;

        table.appendChild(tbody);
        thead.appendChild(row_1);
        row_2.appendChild(row_2_data_1);
        row_2.appendChild(row_2_data_2);
        row_2.appendChild(row_2_data_3);
        row_2.appendChild(row_2_data_4);
        tbody.appendChild(row_2);

document.getElementById('pulls').appendChild(table);
        
    })
    })

  .catch(function(error) {
    console.log(error);
  });




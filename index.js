// Add JavaScript below

import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.8.0"

const supabaseUrl = 'https://afzhzgaeufygfizasysm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmemh6Z2FldWZ5Z2ZpemFzeXNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc2MzA3OTUsImV4cCI6MTk5MzIwNjc5NX0.4BPg60lIeF2lM2CQ9ZfNnw0T5c1X86QP2KybKGUNgGI'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
    let { data: books, error } = await supabase
        .from('books')
        .select('*')

    for (let book of books) {
        let bookList = document.getElementById('books');
        bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.description}</td></tr>`;
    }
}

getBooks();

/* 
Note: I misunderstood the previous lab and did not make a table and kept the items 
in list form. I used your code here to make it into a table and now understant how
it is done.
*/
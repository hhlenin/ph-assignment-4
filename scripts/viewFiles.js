function makePostView(data, key) {
    return `
    <details class="interviewed collapse bg-base-100 border border-base-300" name="my-accordion-det-1">
          <summary class="collapse-title font-semibold">
            <h3 class="font-bold">${data.title}</h3>
            <p class="text-base-content/30">${data.company}</p>
          </summary>
          <div class="collapse-content text-sm">
          <div class="grid grid-cols-12">
              <div class="col-span-11">
                <p class="text-base-content/30 my-6">${data.type} · ${data.salary}</p>
                <p>${data.description}</p>
                <div class="mt-3">
                    <button data-id=${key} ${(data.status === "interview") ? "disabled" : ''} class="uppercase btn btn-outline btn-success mr-[8px]">Interview</button>
                    <button data-id=${key} ${(data.status === "reject") ? "disabled" : ''} class="uppercase btn btn-outline btn-error">Reject</button>
                </div>
              </div>
              <div class="col-span-1">
                <button data-id="${key}" class="delete">
                  <svg class="delete" data-id=${key} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                  </svg>
                </button>
              </div>
            </div>
        

          </div>
        </details>
    `
}

function makeEmptyView() {
    return `
    <div class="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF">
            <path d="M447-446Zm94-84Zm-94 84Zm94-84Zm-94 84Zm94-84ZM813-58 68-803l43-43 745 745-43 43Zm-333-62q-151 0-255.5-46.5T120-280v-400q0-26 16.98-49.15T185-772l220 220q-66-7-124-23.5T180-618v155q54 32 133 50.5T478.62-394q20.38 0 40.38-1 20-1 40-3l53 53q-32 5-65.5 8t-67.5 3q-88 0-166-18t-133-50v126q11 35 106 65.5T480-180q66.32 0 133.16-15T725-232l46 46q-49 30-124.5 48T480-120Zm338-104-38-38v-140q-22 12-46.5 22.5T681-361l-49-49q42-9 79.5-22.5t68.5-30.31V-618q-57 32-131.5 50T494-548l-62-62q33 3 83-.5T615.5-624q50.5-10 94-27.5T773-694q-27-32-117.5-59T480-780q-48 0-96.5 8T292-750l-50-50q48-19 108.5-29.5T480-840q149 0 254.5 47T840-680v400q0 15.36-5.5 29.18T818-224Z"/>
        </svg>
        <p>No Data Found</p>
    </div>
    `
}
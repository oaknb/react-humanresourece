import React from 'react'
import 'antd/dist/antd.css';




function UserComments() {
    return (
      <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-semibold">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-cyan-600">
        Sarah Dayan
      </div>
      <div class="text-gray-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>


       
    )
}

export default UserComments

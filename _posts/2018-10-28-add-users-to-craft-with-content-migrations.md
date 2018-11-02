---
layout: post
title: "Add users to Craft with content migrations"
---

I work at a web agency, where we mostly use Craft CMS to build websites. For each website, the same group of people needs access to the control panel. We could manually create their user accounts. Or we could automate it, and play foosball with the time we saved.

Craft CMS content migrations is the perfect tool for the job. We'll use migrations to populate the database with a predefined list of users. I suggest you take a look at the [documentation](https://docs.craftcms.com/v3/content-migrations.html), if you're not already familiar with content migrations.

To create the migration, run the following command in your terminal:

{% highlight bash %}
./craft migrate/create add_users
{% endhighlight %}

This will create a new migration file in the `migrations` folder.

{% highlight php %}
<?php

namespace craft\contentmigrations;

use Craft;
use craft\db\Migration;

/**
 * m181027_161404_add_users migration.
 */
class m181027_161404_add_users extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        // Place migration code here...
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        echo "m181027_161404_add_users cannot be reverted.\n";
        return false;
    }
}
{% endhighlight %}

I added an array of users to the `safeUp` method, then loop through the array, and create the users.

{% highlight php %}
public function safeUp()
{
    $users = [
        ['george', 'george@agency.com'],
        ['barry', 'barry@agency.com'],
        ['jean', 'jean@agency.com'],
    ];

    foreach ($users as $userData) {
        [$username, $email] = $userData;

        $this->createUser($username, $email);
    }
}
{% endhighlight %}

The `createUser` method adds the users to the database.

{% highlight php %}
use craft\elements\User;

/* ... */

protected function createUser($username, $email)
{
    $user = new User;

    $user->username = $username;
    $user->email = $email;
    $user->admin = true;

    $user->newPassword = CRAFT_ENVIRONMENT === 'local'
        ? $email
        : md5(uniqid().rand());

    $user->passwordResetRequired = CRAFT_ENVIRONMENT !== 'local';

    Craft::$app->getElements()->saveElement($user, false);
}
{% endhighlight %}

Execute the migration by running `./craft migrate/up`. The users can now login with their email address as password. But only in a local environment. They are forced to set a new password in production or development.
